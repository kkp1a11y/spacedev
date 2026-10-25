import { fetchLaunches } from "../api/LaunchesApi.ts";
import { useFetch } from "../../../shared/hooks/UseFetch.ts";
import type { Launch, LaunchFilters } from "../Types.ts";

const EMPTY_LAUNCHES: Launch[] = [];

export function useLaunches(filters: LaunchFilters) {
    const { data, loading, error, reload } = useFetch(fetchLaunches, filters);

    const launches = data?.launches ?? EMPTY_LAUNCHES;

    return {
        launches,
        nextLaunch: data?.nextLaunch ?? null,
        yearTotal: data?.yearTotal ?? 0,
        loading,
        error,
        isEmpty: !loading && !error && launches.length === 0,
        reload,
    };
}