import { DAY_MS, LAUNCH_URL, WINDOW_DAYS } from "../Constants.ts";
import type { Launch, LaunchesData, LaunchFilters } from "../Types.ts";

interface ApiLaunch {
    id: string;
    name: string;
    net: string;
    status: { abbrev: string };
    launch_service_provider: { name: string };
    rocket: { configuration: { name: string } };
    pad: { name: string };
}

interface ApiResponse {
    count: number;
    results: ApiLaunch[];
}

type Params = Record<string, string | number>;

async function request(params: Params, signal: AbortSignal): Promise<ApiResponse> {
    const query = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, String(value)]),
    );
    const res = await fetch(`${LAUNCH_URL}?${query}`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

function mapLaunch(l: ApiLaunch): Launch {
    return {
        id: l.id,
        name: l.name,
        agency: l.launch_service_provider.name,
        rocket: l.rocket.configuration.name,
        pad: l.pad.name,
        status: l.status.abbrev,
        net: l.net,
    };
}

function buildFilterParams({ search, status }: LaunchFilters): Params {
    const params: Params = {};
    if (search.trim()) params.search = search.trim();
    if (status) params.status__ids = status;
    return params;
}

export async function fetchLaunches(
    filters: LaunchFilters,
    signal: AbortSignal,
): Promise<LaunchesData> {
    const now = Date.now();
    const year = new Date(now).getUTCFullYear();
    const base = buildFilterParams(filters);

    const [windowPage, nextPage, yearPage] = await Promise.all([
        request(
            {
                ...base,
                net__gte: new Date(now - WINDOW_DAYS * DAY_MS).toISOString(),
                net__lte: new Date(now + WINDOW_DAYS * DAY_MS).toISOString(),
                ordering: "net",
                limit: filters.limit,
            },
            signal,
        ),
        request(
            { ...base, net__gte: new Date(now).toISOString(), ordering: "net", limit: 1 },
            signal,
        ),
        request(
            {
                ...base,
                net__gte: new Date(Date.UTC(year, 0, 1)).toISOString(),
                net__lte: new Date(Date.UTC(year, 11, 31, 23, 59, 59)).toISOString(),
                limit: 1,
            },
            signal,
        ),
    ]);

    return {
        launches: windowPage.results.map(mapLaunch),
        nextLaunch: nextPage.results[0] ? mapLaunch(nextPage.results[0]) : null,
        yearTotal: yearPage.count,
    };
}