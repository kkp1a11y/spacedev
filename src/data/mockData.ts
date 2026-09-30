import type { Kpi, Launch } from "../types";

export const kpis: Kpi[] = [
    { id: 1, title: "Найближчий запуск", value: "Через 3 дні", note: "Starlink Group 10-5" },
    { id: 2, title: "Запусків цьогоріч", value: "142", change: "+8.4%" },
    { id: 3, title: "Успішність", value: "96.5%", change: "-0.7%" },
];

export const launches: Launch[] = [
    { id: 1, name: "Starlink Group 10-5", agency: "SpaceX", rocket: "Falcon 9", pad: "SLC-40", status: "Go" },
    { id: 2, name: "Crew-12", agency: "NASA", rocket: "Falcon 9", pad: "LC-39A", status: "TBD" },
    { id: 3, name: "Ariane 6 VA265", agency: "Arianespace", rocket: "Ariane 6", pad: "ELA-4", status: "Go" },
    { id: 4, name: "Gaganyaan G1", agency: "ISRO", rocket: "LVM3", pad: "SLP", status: "Success" },
    { id: 5, name: "Kuiper KA-04", agency: "ULA", rocket: "Atlas V", pad: "SLC-41", status: "Go" },
];