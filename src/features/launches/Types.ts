export interface Launch {
    id: string;
    name: string;
    agency: string;
    rocket: string;
    pad: string;
    status: string;
    net: string;
}

export interface LaunchesData {
    launches: Launch[];
    nextLaunch: Launch | null;
    yearTotal: number;
}

export interface LaunchFilters {
    search: string;
    status: string;
    limit: number;
}

export type SortKey = "name" | "agency" | "net";
export type SortDir = "asc" | "desc";

export interface Sort {
    key: SortKey;
    dir: SortDir;
}

export interface LaunchKpis {
    nextLaunchValue: string;
    nextLaunchName?: string;
    year: number;
    yearCount: number;
}
export interface LaunchDetails extends Launch {
    statusName: string;
    statusDescription: string | null;
    missionType: string | null;
    missionDescription: string | null;
    orbit: string | null;
    location: string;
    windowStart: string;
    windowEnd: string;
    image: string | null;
}