import { useContext } from "react";
import { LaunchFiltersContext } from "../context/LaunchFiltersContext.ts";

export function useLaunchFiltersContext() {
    const ctx = useContext(LaunchFiltersContext);
    if (!ctx) throw new Error("useLaunchFiltersContext must be used inside LaunchFiltersProvider");
    return ctx;
}