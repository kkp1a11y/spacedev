import type { Kpi, Launch } from "../types";

const FINISHED = ["Success", "Failure", "Partial Failure"];

export function buildKpis(launches: Launch[]): Kpi[] {
    const now = Date.now();
    const next = launches
        .filter((l) => Date.parse(l.net) > now)
        .sort((a, b) => Date.parse(a.net) - Date.parse(b.net))[0];

    const finished = launches.filter((l) => FINISHED.includes(l.status));
    const successes = finished.filter((l) => l.status === "Success").length;
    const rate = finished.length ? (successes / finished.length) * 100 : 0;

    return [
        {
            id: 1,
            title: "Найближчий запуск",
            value: next
                ? `Через ${Math.ceil((Date.parse(next.net) - now) / 86_400_000)} дн.`
                : "—",
            note: next?.name,
        },
        { id: 2, title: "Запусків у вибірці (±60 дн.)", value: String(launches.length) },
        {
            id: 3,
            title: "Успішність",
            value: `${rate.toFixed(1)}%`,
            note: `завершених: ${finished.length}`,
        },
    ];
}