import type { Launch, Sort, SortKey } from "../Types.ts";

export function sortLaunches(items: Launch[], { key, dir }: Sort): Launch[] {
    const sign = dir === "asc" ? 1 : -1;
    return [...items].sort((a, b) =>
        key === "net"
            ? sign * (Date.parse(a.net) - Date.parse(b.net))
            : sign * a[key].localeCompare(b[key]),
    );
}

export function getNextSort(current: Sort, key: SortKey): Sort {
    if (current.key !== key) return { key, dir: "asc" };
    return { key, dir: current.dir === "asc" ? "desc" : "asc" };
}