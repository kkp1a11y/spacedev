export interface Kpi {
    id: number;
    title: string;
    value: string;
    change?: string;
    note?: string;
}

export type LaunchStatus = "Go" | "TBD" | "Success";

export interface Launch {
    id: number;
    name: string;
    agency: string;
    rocket: string;
    pad: string;
    status: LaunchStatus;
}