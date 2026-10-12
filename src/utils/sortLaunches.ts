import type { Launch } from "../types";

export type SortKey = "name" | "agency" | "net";
export type SortDir = "asc" | "desc";

export function sortLaunches(items: Launch[], key: SortKey, dir: SortDir): Launch[] {
    const sign = dir === "asc" ? 1 : -1;
    return [...items].sort((a, b) =>
        key === "net"
            ? sign * (Date.parse(a.net) - Date.parse(b.net))
            : sign * a[key].localeCompare(b[key]),
    );
}