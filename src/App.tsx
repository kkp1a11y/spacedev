import { useState } from "react";
import KpiCard from "./components/widgets/KpiCard.tsx";
import Counter from "./components/widgets/Counter.tsx";
import Toggle from "./components/ui/Toggle.tsx";
import Section from "./components/ui/Section.tsx";
import DataState from "./components/ui/DataState.tsx";
import LaunchesSection from "./components/launches/LaunchesSection.tsx";
import { useLaunches } from "./hooks/useLaunches";
import { buildKpis } from "./utils/buildKpis";
import "./App.css";

export default function App() {
    const [isDark, setIsDark] = useState(false);
    const [tracked, setTracked] = useState(0);
    const { launches, loading, error } = useLaunches();
    const theme = isDark ? "dark" : "light";
    const state = { loading, error, isEmpty: launches.length === 0 };

    return (
        <div className="app" data-theme={theme}>
            <main>
                <h1>Космічні запуски</h1>
                <Toggle labelOn="Темна тема" labelOff="Світла тема" checked={isDark} onChange={setIsDark} />

                <Section title="Ключові показники">
                    <div className="grid">
                        <DataState {...state}>
                            {buildKpis(launches).map((k) => (
                                <KpiCard key={k.id} title={k.title} value={k.value} change={k.change} note={k.note} />
                            ))}
                        </DataState>
                        <Counter label="Відстежувані запуски" value={tracked} step={1} onChange={setTracked} />
                    </div>
                </Section>

                <Section title="Місії">
                    <DataState {...state}>
                        <LaunchesSection launches={launches} />
                    </DataState>
                </Section>
            </main>
        </div>
    );
}