export interface Kpi {
    id: number;
    title: string;
    value: string;
    change?: string;
    note?: string;
}

export interface Launch {
    id: string;
    name: string;
    agency: string;
    rocket: string;
    pad: string;
    status: string;
    net: string;
}