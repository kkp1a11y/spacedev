import type { ReactNode } from "react";
import { useLaunchFilters } from "../hooks/UseLaunchFilters.ts";
import { LaunchFiltersContext } from "./LaunchFiltersContext.ts";

export default function LaunchFiltersProvider({ children }: { children: ReactNode }) {
    const value = useLaunchFilters();

    return (
        <LaunchFiltersContext.Provider value={value}>
            {children}
        </LaunchFiltersContext.Provider>
    );
}