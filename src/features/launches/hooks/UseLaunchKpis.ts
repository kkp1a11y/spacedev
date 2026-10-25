import { useMemo, useState } from "react";
import { getLaunchKpis } from "../services/LaunchesKpis.ts";
import type { Launch } from "../Types.ts";

export function useLaunchKpis(nextLaunch: Launch | null, yearTotal: number) {
    const [now] = useState(() => Date.now());

    return useMemo(
        () => getLaunchKpis(nextLaunch, yearTotal, now),
        [nextLaunch, yearTotal, now],
    );
}