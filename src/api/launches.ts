import type { Launch } from "../types";

const BASE_URL = "https://ll.thespacedevs.com/2.2.0";

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
    results: ApiLaunch[];
}
const DAY = 86_400_000;

export async function fetchLaunches(signal: AbortSignal): Promise<Launch[]> {
    const now = Date.now();
    const from = new Date(now - 60 * DAY).toISOString();
    const to = new Date(now + 60 * DAY).toISOString();
    const url = `${BASE_URL}/launch/?net__gte=${from}&net__lte=${to}&ordering=net&limit=100`;

    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data: ApiResponse = await res.json();
    return data.results.map((l) => ({
        id: l.id,
        name: l.name,
        agency: l.launch_service_provider.name,
        rocket: l.rocket.configuration.name,
        pad: l.pad.name,
        status: l.status.abbrev,
        net: l.net,
    }));
}