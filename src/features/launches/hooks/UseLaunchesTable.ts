import { useMemo } from "react";
import { useAppStore } from "../../../app/store/UseAppStore.ts";
import {
    filterLaunchesByAgency,
    getAgencies,
} from "../services/LaunchesFilters.ts";
import { sortLaunches } from "../services/LaunchesSort.ts";
import type { Launch } from "../Types.ts";

export function useLaunchesTable(launches: Launch[]) {
    const agency = useAppStore((state) => state.agency);
    const sort = useAppStore((state) => state.sort);
    const favoriteIds = useAppStore((state) => state.favoriteIds);
    const onlyFavorites = useAppStore((state) => state.onlyFavorites);

    const agencies = useMemo(
        () => getAgencies(launches),
        [launches],
    );

    const rows = useMemo(() => {
        const filtered = filterLaunchesByAgency(launches, agency);

        const visible = onlyFavorites
            ? filtered.filter((launch) => favoriteIds.includes(launch.id))
            : filtered;

        return sortLaunches(visible, sort);
    }, [launches, agency, sort, favoriteIds, onlyFavorites]);

    return { agencies, rows };
}