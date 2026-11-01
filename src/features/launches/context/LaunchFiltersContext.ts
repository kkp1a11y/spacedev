import { createContext } from "react";
import type { Control } from "react-hook-form";
import type { LaunchFilters } from "../Types.ts";

export interface LaunchFiltersContextValue {
    control: Control<LaunchFilters>;
    params: LaunchFilters;
    resetFilters: () => void;
}

export const LaunchFiltersContext = createContext<LaunchFiltersContextValue | null>(null);