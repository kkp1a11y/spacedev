import { useState } from "react";
import KpiCard from "./components/KpiCard";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Section from "./components/Section";
import FilteredList from "./components/FilteredList";
import { kpis, launches } from "./data/mockData";
import "./App.css";

export default function App() {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? "dark" : "light";

    return (
        <div className="app" data-theme={theme}>
            <main>
                <h1>Космічні запуски</h1>
                <Toggle
                    labelOn="Темна тема"
                    labelOff="Світла тема"
                    checked={isDark}
                    onChange={setIsDark}
                />

                <Section title="Ключові показники">
                    <div className="grid">
                        {kpis.map((k) => (
                            <KpiCard
                                key={k.id}
                                title={k.title}
                                value={k.value}
                                change={k.change}
                                note={k.note}
                            />
                        ))}
                        <Counter label="Відстежувані запуски" />
                    </div>
                </Section>

                <Section title="Місії">
                    <FilteredList items={launches} />
                </Section>
            </main>
        </div>
    );
}