interface CounterProps {
    label: string;
    value: number;
    step?: number;
    initial?: number;
    onChange: (value: number) => void;
}

export default function Counter({
                                    label,
                                    value,
                                    step = 1,
                                    initial = 0,
                                    onChange,
                                }: CounterProps) {
    return (
        <div className="card">
            <p className="card-title">{label}</p>
            <h2>{value}</h2>
            <button onClick={() => onChange(value - step)}>−</button>
            <button onClick={() => onChange(value + step)}>+</button>
            <button onClick={() => onChange(initial)}>Скинути</button>
        </div>
    );
}