import RequestState from "../../shared/components/feedback/RequestState/RequestState.tsx";
import KpiCard from "../../shared/components/ui/KpiCard/KpiCard.tsx";
import LaunchesFilters from "../../features/launches/components/LaunchesFilters/LaunchesFilters.tsx";
import AgencyFilter from "../../features/launches/components/AgencyFilter/AgencyFilter.tsx";
import LaunchesTable from "../../features/launches/components/LaunchesTable/LaunchesTable.tsx";
import LaunchesChart from "../../features/launches/components/LaunchesChart/LaunchesChart.tsx";
import { useAppStore } from "../store/UseAppStore.ts";
import { useDebounce } from "../../shared/hooks/UseDebounce.ts";
import { DEBOUNCE_MS } from "../../features/launches/Constants.ts";
import { useLaunches } from "../../features/launches/hooks/UseLaunches.ts";
import { useLaunchKpis } from "../../features/launches/hooks/UseLaunchKpis.ts";
import { useLaunchesTable } from "../../features/launches/hooks/UseLaunchesTable.ts";

export default function DashboardRoute() {
    const filters = useAppStore((state) => state.filters);
    const params = useDebounce(filters, DEBOUNCE_MS);

    const {
        launches,
        nextLaunch,
        yearTotal,
        loading,
        error,
        reload,
    } = useLaunches(params);

    const kpis = useLaunchKpis(nextLaunch, yearTotal);
    const table = useLaunchesTable(launches);

    return (
        <div className="dashboard">
            <section className="section dashboard__filters">
                <h3>Фільтри</h3>
                <LaunchesFilters />
            </section>

            <RequestState
                loading={loading}
                error={error}
                isEmpty={false}
                onRetry={reload}
            >
                <section className="section dashboard__kpis">
                    <h3>Ключові показники</h3>

                    <div className="kpi-grid">
                        <KpiCard
                            title="Найближчий запуск"
                            value={kpis.nextLaunchValue}
                            note={kpis.nextLaunchName}
                        />

                        <KpiCard
                            title="Запусків цьогоріч"
                            value={String(kpis.yearCount)}
                            note={`${kpis.year} рік · пошук і статус`}
                        />

                        <KpiCard
                            title="Місій у таблиці"
                            value={String(table.rows.length)}
                            note="вікно ±60 днів"
                        />
                    </div>
                </section>

                <section className="section dashboard__launches">
                    <h3>Місії</h3>

                    <AgencyFilter agencies={table.agencies} />

                    {table.rows.length > 0 ? (
                        <LaunchesTable launches={table.rows} />
                    ) : (
                        <p role="status">
                            За цими фільтрами нічого не знайдено.
                        </p>
                    )}
                </section>

                <div className="dashboard__statistics">
                    <LaunchesChart launches={table.rows} />
                </div>
            </RequestState>
        </div>
    );
}