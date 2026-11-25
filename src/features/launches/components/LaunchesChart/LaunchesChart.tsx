import { useMemo } from "react";
import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import { Button } from "../../../../shared/ui/atoms/Button/Button.tsx";
import { Card } from "../../../../shared/ui/molecules/Card/Card.tsx";
import { DataChart } from "../../../../shared/ui/organisms/DataChart/DataChart.tsx";
import { groupLaunchesByAgency } from "../../services/LaunchesChart.ts";
import type { Launch } from "../../Types.ts";

export default function LaunchesChart({ launches }: { launches: Launch[] }) {
    const type = useAppStore((s) => s.chartType);
    const setType = useAppStore((s) => s.setChartType);

    const data = useMemo(
        () => groupLaunchesByAgency(launches),
        [launches],
    );

    return (
        <Card title="Розподіл запусків за агенціями">
            <div className="ds-stack">
                <div
                    className="ds-actions"
                    role="group"
                    aria-label="Тип графіка"
                >
                    <Button
                        size="sm"
                        variant={type === "bar" ? "primary" : "secondary"}
                        aria-pressed={type === "bar"}
                        onClick={() => setType("bar")}
                    >
                        Стовпчиковий
                    </Button>

                    <Button
                        size="sm"
                        variant={type === "pie" ? "primary" : "secondary"}
                        aria-pressed={type === "pie"}
                        onClick={() => setType("pie")}
                    >
                        Круговий
                    </Button>
                </div>

                <p className="ds-muted">
                    Показано {launches.length} місій із поточної таблиці.
                    Вибірка обмежена активними фільтрами та лімітом.
                </p>

                <DataChart
                    data={data}
                    type={type}
                    seriesName="Кількість запусків"
                    emptyLabel="Немає запусків за вибраними фільтрами."
                />
            </div>
        </Card>
    );
}