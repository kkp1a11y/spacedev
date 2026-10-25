import type { Launch } from "../Types.ts";

export function getAgencies(launches: Launch[]): string[] {
    return Array.from(new Set(launches.map((l) => l.agency)));
}

export function filterLaunchesByAgency(launches: Launch[], agency: string): Launch[] {
    return agency ? launches.filter((l) => l.agency === agency) : launches;
}