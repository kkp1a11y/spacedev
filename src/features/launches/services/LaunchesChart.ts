import type { ChartPoint } from "../../../shared/components/charts/Types.ts";
import type { Launch } from "../Types.ts";

export function groupLaunchesByAgency(launches: Launch[]): ChartPoint[] {
    const counts = new Map<string, number>();

    for (const launch of launches) {
        counts.set(
            launch.agency,
            (counts.get(launch.agency) ?? 0) + 1,
        );
    }

    return Array.from(counts, ([name, value]) => ({ name, value }))
        .sort(
            (a, b) =>
                b.value - a.value || a.name.localeCompare(b.name),
        );
}