import Button from "../ui/Button/Button.tsx";
import type { ChartType } from "./Types.ts";

interface ChartTypeToggleProps {
    value: ChartType;
    onChange: (type: ChartType) => void;
}

export default function ChartTypeToggle({
                                            value,
                                            onChange,
                                        }: ChartTypeToggleProps) {
    return (
        <div
            className="chart-toggle"
            role="group"
            aria-label="Тип графіка"
        >
            <Button
                aria-pressed={value === "bar"}
                onClick={() => onChange("bar")}
            >
                Стовпчиковий
            </Button>

            <Button
                aria-pressed={value === "pie"}
                onClick={() => onChange("pie")}
            >
                Круговий
            </Button>
        </div>
    );
}