import { useMemo, useState } from "react";
import { ALL_AGENCIES, DEFAULT_SORT } from "../Constants.ts";
import { filterLaunchesByAgency, getAgencies } from "../services/LaunchesFilters.ts";
import { getNextSort, sortLaunches } from "../services/LaunchesSort.ts";
import type { Launch, Sort, SortKey } from "../Types.ts";

export function useLaunchesTable(launches: Launch[]) {
    const [agency, setAgency] = useState(ALL_AGENCIES);
    const [sort, setSort] = useState<Sort>(DEFAULT_SORT);

    const agencies = useMemo(() => getAgencies(launches), [launches]);
    const activeAgency = agencies.includes(agency) ? agency : ALL_AGENCIES;

    const rows = useMemo(
        () => sortLaunches(filterLaunchesByAgency(launches, activeAgency), sort),
        [launches, activeAgency, sort],
    );

    const toggleSort = (key: SortKey) => setSort((prev) => getNextSort(prev, key));

    return { agencies, agency: activeAgency, setAgency, sort, rows, toggleSort };
}