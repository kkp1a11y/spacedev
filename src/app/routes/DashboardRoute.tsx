import { Button } from "../../shared/ui/atoms/Button/Button.tsx";
import { Spinner } from "../../shared/ui/atoms/Spinner/Spinner.tsx";
import { Card } from "../../shared/ui/molecules/Card/Card.tsx";
import { KpiCard } from "../../shared/ui/molecules/KpiCard/KpiCard.tsx";
import LaunchesFilters from "../../features/launches/components/LaunchesFilters/LaunchesFilters.tsx";
import AgencyFilter from "../../features/launches/components/AgencyFilter/AgencyFilter.tsx";
import LaunchesTable from "../../features/launches/components/LaunchesTable/LaunchesTable.tsx";
import LaunchesChart from "../../features/launches/components/LaunchesChart/LaunchesChart.tsx";
import { useAppStore } from "../store/UseAppStore.ts";
import { useDebounce } from "../../shared/hooks/UseDebounce.ts";
import {
    DEBOUNCE_MS,
    WINDOW_DAYS,
} from "../../features/launches/Constants.ts";
import { useLaunches } from "../../features/launches/hooks/UseLaunches.ts";
import { useLaunchKpis } from "../../features/launches/hooks/UseLaunchKpis.ts";
import { useLaunchesTable } from "../../features/launches/hooks/UseLaunchesTable.ts";

export default function DashboardRoute() {
    const filters = useAppStore((s) => s.filters);
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
            <Card title="Фільтри" className="dashboard__filters">
                <LaunchesFilters />
            </Card>

            {loading ? (
                <Card className="dashboard__message">
                    <Spinner />
                </Card>
            ) : error ? (
                <Card
                    title="Не вдалося завантажити дані"
                    className="dashboard__message"
                >
                    <div className="ds-stack" role="alert">
                        <p>{error}</p>
                        <Button onClick={reload}>
                            Спробувати ще раз
                        </Button>
                    </div>
                </Card>
            ) : (
                <>
                    <Card
                        title="Ключові показники"
                        className="dashboard__kpis"
                    >
                        <div className="kpi-grid">
                            <KpiCard
                                title="Найближчий запуск"
                                value={kpis.nextLaunchValue}
                                note={kpis.nextLaunchName}
                                tone="accent"
                            />

                            <KpiCard
                                title="Запусків цьогоріч"
                                value={String(kpis.yearCount)}
                                note={`${kpis.year} рік · пошук і статус`}
                            />

                            <KpiCard
                                title="Місій у таблиці"
                                value={String(table.rows.length)}
                                note={`вікно ±${WINDOW_DAYS} днів`}
                            />
                        </div>
                    </Card>

                    <Card title="Місії">
                        <div className="ds-stack">
                            <AgencyFilter agencies={table.agencies} />

                            {table.rows.length ? (
                                <LaunchesTable launches={table.rows} />
                            ) : (
                                <p role="status">
                                    За цими фільтрами нічого не знайдено.
                                </p>
                            )}
                        </div>
                    </Card>

                    <LaunchesChart launches={table.rows} />
                </>
            )}
        </div>
    );
}