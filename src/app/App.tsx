import { useState } from "react";
import RequestState from "../shared/components/feedback/RequestState/RequestState.tsx";
import KpiCard from "../shared/components/ui/KpiCard/KpiCard.tsx";
import ThemeToggle from "../features/theme/components/ThemeToggle/ThemeToggle.tsx";
import LaunchesFilters from "../features/launches/components/LaunchesFilters/LaunchesFilters.tsx";
import AgencyFilter from "../features/launches/components/AgencyFilter/AgencyFilter.tsx";
import LaunchesTable from "../features/launches/components/LaunchesTable/LaunchesTable.tsx";
import { useLaunchFilters } from "../features/launches/hooks/UseLaunchFilters.ts";
import { useLaunches } from "../features/launches/hooks/UseLaunches.ts";
import { useLaunchKpis } from "../features/launches/hooks/UseLaunchKpis.ts";
import { useLaunchesTable } from "../features/launches/hooks/UseLaunchesTable.ts";
import "./App.css";

export default function App() {
    const [isDark, setIsDark] = useState(false);

    const { control, params, resetFilters } = useLaunchFilters();
    const { launches, nextLaunch, yearTotal, loading, error, isEmpty, reload } =
        useLaunches(params);
    const kpis = useLaunchKpis(nextLaunch, yearTotal);
    const table = useLaunchesTable(launches);

    return (
        <div className="app" data-theme={isDark ? "dark" : "light"}>
            <main className="app__main">
                <header className="app__header">
                    <h1>Космічні запуски</h1>
                    <ThemeToggle checked={isDark} onChange={setIsDark} />
                </header>

                <section className="section">
                    <h3>Фільтри</h3>
                    <LaunchesFilters control={control} onReset={resetFilters} />
                </section>

                <RequestState
                    loading={loading}
                    error={error}
                    isEmpty={isEmpty}
                    onRetry={reload}
                >
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
            </main>
        </div>
    );
}