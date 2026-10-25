import { DAY_MS, NO_DATA } from "../Constants.ts";
import type { Launch, LaunchKpis } from "../Types.ts";

export function getLaunchKpis(
    nextLaunch: Launch | null,
    yearTotal: number,
    now: number,
): LaunchKpis {
    const days = nextLaunch
        ? Math.ceil((Date.parse(nextLaunch.net) - now) / DAY_MS)
        : null;

    return {
        nextLaunchValue: days === null ? NO_DATA : `Через ${days} дн.`,
        nextLaunchName: nextLaunch?.name,
        year: new Date(now).getFullYear(),
        yearCount: yearTotal,
    };
}