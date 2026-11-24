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
import type { ChartPoint, ChartType } from "./Types.ts";
import "./DataChart.css";

const COLORS = [
    "#3b82f6",
    "#14b8a6",
    "#f59e0b",
    "#8b5cf6",
    "#ef4444",
    "#06b6d4",
    "#ec4899",
];

const tooltipStyle = {
    backgroundColor: "var(--secondary-color)",
    color: "var(--text-color)",
    borderColor: "var(--border-color)",
};

interface DataChartProps {
    data: ChartPoint[];
    type: ChartType;
}

export default function DataChart({ data, type }: DataChartProps) {
    if (data.length === 0) {
        return (
            <p role="status">
                Немає даних для графіка за вибраними фільтрами.
            </p>
        );
    }

    return (
        <div
            className="data-chart"
            role="img"
            aria-label={data
                .map((point) => `${point.name}: ${point.value}`)
                .join("; ")}
        >
            <ResponsiveContainer width="100%" height="100%">
                {type === "bar" ? (
                    <BarChart
                        data={data}
                        margin={{
                            top: 16,
                            right: 16,
                            bottom: 48,
                            left: 0,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="var(--border-color)"
                        />

                        <XAxis
                            dataKey="name"
                            tick={{
                                fill: "var(--text-color)",
                                fontSize: 11,
                            }}
                            interval={0}
                            angle={-20}
                            textAnchor="end"
                        />

                        <YAxis
                            allowDecimals={false}
                            tick={{ fill: "var(--text-color)" }}
                        />

                        <Tooltip
                            contentStyle={tooltipStyle}
                            itemStyle={{ color: "var(--text-color)" }}
                        />

                        <Bar
                            dataKey="value"
                            name="Кількість запусків"
                            fill="var(--primary-color)"
                            isAnimationActive={false}
                        />
                    </BarChart>
                ) : (
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="45%"
                            outerRadius="65%"
                            label
                            isAnimationActive={false}
                        >
                            {data.map((point, index) => (
                                <Cell
                                    key={point.name}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            contentStyle={tooltipStyle}
                            itemStyle={{ color: "var(--text-color)" }}
                        />

                        <Legend />
                    </PieChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}