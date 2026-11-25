import { Button } from "../../atoms/Button/Button.tsx";

interface CounterProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    initial?: number;
    disabled?: boolean;
}

export function Counter({
                            label,
                            value,
                            onChange,
                            min = 0,
                            max = Infinity,
                            step = 1,
                            initial = min,
                            disabled = false,
                        }: CounterProps) {
    return (
        <div className="ds-stack">
            <span className="ds-muted">{label}</span>
            <strong>{value}</strong>

            <div className="ds-actions">
                <Button
                    size="sm"
                    aria-label={`Зменшити: ${label}`}
                    disabled={disabled || value <= min}
                    onClick={() => onChange(Math.max(min, value - step))}
                >
                    −
                </Button>

                <Button
                    size="sm"
                    aria-label={`Збільшити: ${label}`}
                    disabled={disabled || value >= max}
                    onClick={() => onChange(Math.min(max, value + step))}
                >
                    +
                </Button>

                <Button
                    size="sm"
                    variant="secondary"
                    disabled={disabled}
                    onClick={() =>
                        onChange(Math.min(max, Math.max(min, initial)))
                    }
                >
                    Скинути
                </Button>
            </div>
        </div>
    );
}