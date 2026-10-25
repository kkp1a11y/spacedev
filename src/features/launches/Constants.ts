import type { LaunchFilters, Sort } from "./Types.ts";

export const API_BASE_URL = import.meta.env.VITE_API_URL;
export const LAUNCH_URL = `${API_BASE_URL}/launch/`;

export const DAY_MS = 86_400_000;
export const WINDOW_DAYS = 60;

export const ALL_AGENCIES = "";
export const DEFAULT_SORT: Sort = { key: "net", dir: "asc" };
export const NO_DATA = "—";

export const DEBOUNCE_MS = 400;
export const LIMIT_MIN = 5;
export const LIMIT_MAX = 100;
export const LIMIT_STEP = 5;

export const DEFAULT_FILTERS: LaunchFilters = {
    search: "",
    status: "",
    limit: 20,
};

export const STATUS_OPTIONS = [
    { value: "1", label: "Go" },
    { value: "2", label: "TBD" },
    { value: "3", label: "Success" },
    { value: "4", label: "Failure" },
    { value: "5", label: "Hold" },
    { value: "6", label: "In Flight" },
    { value: "7", label: "Partial Failure" },
    { value: "8", label: "TBC" },
] as const;