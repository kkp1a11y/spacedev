import type { Launch } from "../types";

interface LaunchTableProps {
    launches: Launch[];
}

export default function LaunchTable({ launches }: LaunchTableProps) {
    return (
        <table>
            <thead>
            <tr><th>Місія</th><th>Агенція</th><th>Статус</th></tr>
            </thead>
            <tbody>
            {launches.map((l) => (
                <tr key={l.id}>
                    <td>{l.name}</td>
                    <td>{l.agency}</td>
                    <td>{l.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}