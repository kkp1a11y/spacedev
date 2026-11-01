import RequestState from "../../shared/components/feedback/RequestState/RequestState.tsx";
import KpiCard from "../../shared/components/ui/KpiCard/KpiCard.tsx";
import LaunchesFilters from "../../features/launches/components/LaunchesFilters/LaunchesFilters.tsx";
import AgencyFilter from "../../features/launches/components/AgencyFilter/AgencyFilter.tsx";
import LaunchesTable from "../../features/launches/components/LaunchesTable/LaunchesTable.tsx";
import { useLaunchFiltersContext } from "../../features/launches/hooks/UseLaunchFiltersContext.ts";
import { useLaunches } from "../../features/launches/hooks/UseLaunches.ts";
import { useLaunchKpis } from "../../features/launches/hooks/UseLaunchKpis.ts";
import { useLaunchesTable } from "../../features/launches/hooks/UseLaunchesTable.ts";

export default function DashboardRoute() {
    const { params } = useLaunchFiltersContext();
    const { launches, nextLaunch, yearTotal, loading, error, isEmpty, reload } =
        useLaunches(params);
    const kpis = useLaunchKpis(nextLaunch, yearTotal);
    const table = useLaunchesTable(launches);

    return (
        <>
            <section className="section">
                <h3>Фільтри</h3>
                <LaunchesFilters />
            </section>

            <RequestState loading={loading} error={error} isEmpty={isEmpty} onRetry={reload}>
                <section className="section">
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
                            note={`${kpis.year} рік`}
                        />
                        <KpiCard
                            title="Місій у таблиці"
                            value={String(launches.length)}
                            note="вікно ±60 днів"
                        />
                    </div>
                </section>

                <section className="section">
                    <h3>Місії</h3>
                    <AgencyFilter
                        agencies={table.agencies}
                        value={table.agency}
                        onChange={table.setAgency}
                    />
                    <LaunchesTable
                        launches={table.rows}
                        sort={table.sort}
                        onSort={table.toggleSort}
                    />
                </section>
            </RequestState>
        </>
    );
}