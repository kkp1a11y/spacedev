import type { Launch } from "../../types.ts";
import type { SortDir, SortKey } from "../../utils/sortLaunches.ts";

interface LaunchTableProps {
    launches: Launch[];
    sortKey: SortKey;
    sortDir: SortDir;
    onSort: (key: SortKey) => void;
}

export default function LaunchTable({ launches, sortKey, sortDir, onSort }: LaunchTableProps) {
    const arrow = (key: SortKey) => (key === sortKey ? (sortDir === "asc" ? " ▲" : " ▼") : "");

    return (
        <table>
            <thead>
            <tr>
                <th className="sortable" onClick={() => onSort("name")}>Місія{arrow("name")}</th>
                <th className="sortable" onClick={() => onSort("agency")}>Агенція{arrow("agency")}</th>
                <th>Ракета</th>
                <th>Майданчик</th>
                <th className="sortable" onClick={() => onSort("net")}>Дата{arrow("net")}</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            {launches.map((l) => (
                <tr key={l.id}>
                    <td>{l.name}</td>
                    <td>{l.agency}</td>
                    <td>{l.rocket}</td>
                    <td>{l.pad}</td>
                    <td>{new Date(l.net).toLocaleString("uk-UA")}</td>
                    <td>{l.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}