import Button from "../Button/Button.tsx";
import "./Counter.css";

interface CounterProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
    min?: number;
    max?: number;
    initial?: number;
}

export default function Counter({
                                    label,
                                    value,
                                    onChange,
                                    step = 1,
                                    min = Number.NEGATIVE_INFINITY,
                                    max = Number.POSITIVE_INFINITY,
                                    initial = 0,
                                }: CounterProps) {
    return (
        <div className="counter">
            <p className="counter__title">{label}</p>
            <h2 className="counter__value">{value}</h2>
            <Button disabled={value <= min} onClick={() => onChange(Math.max(min, value - step))}>−</Button>
            <Button disabled={value >= max} onClick={() => onChange(Math.min(max, value + step))}>+</Button>
            <Button onClick={() => onChange(initial)}>Скинути</Button>
        </div>
    );
}