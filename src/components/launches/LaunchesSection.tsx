import { useState } from "react";
import type { Launch } from "../../types.ts";
import FilteredList from "../widgets/FilteredList.tsx";
import LaunchTable from "./LaunchTable.tsx";
import { sortLaunches, type SortDir, type SortKey } from "../../utils/sortLaunches.ts";

export default function LaunchesSection({ launches }: { launches: Launch[] }) {
    const [sortKey, setSortKey] = useState<SortKey>("net");
    const [sortDir, setSortDir] = useState<SortDir>("asc");

    const handleSort = (key: SortKey) => {
        if (key === sortKey) {
            setSortDir((d) => (d === "asc" ? "desc" : "asc"));
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    };

    return (
        <FilteredList items={launches} getCategory={(l) => l.agency} allLabel="Усі агенції">
            {(visible) => (
                <LaunchTable
                    launches={sortLaunches(visible, sortKey, sortDir)}
                    sortKey={sortKey}
                    sortDir={sortDir}
                    onSort={handleSort}
                />
            )}
        </FilteredList>
    );
}