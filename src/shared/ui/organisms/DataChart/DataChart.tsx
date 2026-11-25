import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import type { ChartPoint, ChartType } from "./DataChart.types.ts";
import { chartTokens as t } from "../../chartTokens.ts";

interface ChartTooltipProps {
    active?: boolean;
    payload?: readonly {
        name?: string | number;
        value?: string | number;
        payload?: ChartPoint;
    }[];
}

function ChartTooltip({ active, payload }: ChartTooltipProps) {
    if (!active || !payload?.length) {
        return null;
    }

    return (
        <div className="ds-chart-tooltip">
            {payload.map((item, index) => (
                <p key={index}>
                    {item.payload?.name ?? item.name}: {item.value}
                </p>
            ))}
        </div>
    );
}

interface DataChartProps {
    data: ChartPoint[];
    type: ChartType;
    seriesName?: string;
    emptyLabel?: string;
}

export function DataChart({
                              data,
                              type,
                              seriesName = "Кількість",
                              emptyLabel = "Немає даних для графіка.",
                          }: DataChartProps) {
    if (!data.length) {
        return <p role="status">{emptyLabel}</p>;
    }

    return (
        <div
            className="ds-chart"
            role="img"
            aria-label={data
                .map((item) => `${item.name}: ${item.value}`)
                .join("; ")}
        >
            <ResponsiveContainer width="100%" height="100%">
                {type === "bar" ? (
                    <BarChart data={data} margin={t.margin}>
                        <CartesianGrid
                            strokeDasharray={t.gridDash}
                            stroke="var(--border)"
                        />

                        <XAxis
                            dataKey="name"
                            tick={{
                                fill: "var(--text)",
                                fontSize: t.tickSize,
                            }}
                            interval={0}
                            angle={t.labelAngle}
                            textAnchor="end"
                        />

                        <YAxis
                            allowDecimals={false}
                            tick={{ fill: "var(--text)" }}
                        />

                        <Tooltip content={<ChartTooltip />} />

                        <Bar
                            dataKey="value"
                            name={seriesName}
                            fill="var(--primary)"
                            isAnimationActive={false}
                        />
                    </BarChart>
                ) : (
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx={t.centerX}
                            cy={t.centerY}
                            outerRadius={t.radius}
                            label
                            isAnimationActive={false}
                        >
                            {data.map((item, index) => (
                                <Cell
                                    key={item.name}
                                    fill={t.colors[index % t.colors.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip content={<ChartTooltip />} />
                        <Legend />
                    </PieChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}