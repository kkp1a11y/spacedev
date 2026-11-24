import { useMemo } from "react";
import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import DataChart from "../../../../shared/components/charts/DataChart.tsx";
import ChartTypeToggle from "../../../../shared/components/charts/ChartTypeToggle.tsx";
import { groupLaunchesByAgency } from "../../services/LaunchesChart.ts";
import type { Launch } from "../../Types.ts";

export default function LaunchesChart({ launches }: { launches: Launch[] }) {
    const type = useAppStore((state) => state.chartType);
    const setType = useAppStore((state) => state.setChartType);

    const data = useMemo(
        () => groupLaunchesByAgency(launches),
        [launches],
    );

    return (
        <section className="section">
            <h3>Розподіл запусків за агенціями</h3>

            <ChartTypeToggle value={type} onChange={setType} />

            <p className="chart-note">
                Показано {launches.length} місій із поточної таблиці
                за активними фільтрами. Це вибірка, обмежена лімітом
                результатів.
            </p>

            <DataChart data={data} type={type} />
        </section>
    );
}