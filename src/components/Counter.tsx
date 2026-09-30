import { useState } from "react";

interface CounterProps {
    label: string;
    initial?: number;
}

export default function Counter({ label, initial = 0 }: CounterProps) {
    const [count, setCount] = useState(initial);

    return (
        <div className="card">
            <p className="card-title">{label}</p>
            <h2>{count}</h2>
            <button onClick={() => setCount((c) => c - 1)}>−</button>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <button onClick={() => setCount(initial)}>Скинути</button>
        </div>
    );
}