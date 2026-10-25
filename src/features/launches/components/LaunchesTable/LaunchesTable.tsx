import { formatDateTime } from "../../../../shared/utils/FormatDate.ts";
import type { Launch, Sort, SortKey } from "../../Types.ts";
import SortHeader from "../SortHeader/SortHeader.tsx";
import "./LaunchesTable.css";

interface LaunchesTableProps {
    launches: Launch[];
    sort: Sort;
    onSort: (key: SortKey) => void;
}

export default function LaunchesTable({ launches, sort, onSort }: LaunchesTableProps) {
    const getDirection = (key: SortKey) => (sort.key === key ? sort.dir : null);

    return (
        <div className="launches-table__wrapper">
            <table className="launches-table">
                <thead>
                <tr>
                    <SortHeader label="Місія" direction={getDirection("name")} onSort={() => onSort("name")} />
                    <SortHeader label="Агенція" direction={getDirection("agency")} onSort={() => onSort("agency")} />
                    <th className="launches-table__th">Ракета</th>
                    <th className="launches-table__th">Майданчик</th>
                    <SortHeader label="Дата" direction={getDirection("net")} onSort={() => onSort("net")} />
                    <th className="launches-table__th">Статус</th>
                </tr>
                </thead>
                <tbody>
                {launches.map((l) => (
                    <tr key={l.id}>
                        <td className="launches-table__td">{l.name}</td>
                        <td className="launches-table__td">{l.agency}</td>
                        <td className="launches-table__td">{l.rocket}</td>
                        <td className="launches-table__td">{l.pad}</td>
                        <td className="launches-table__td">{formatDateTime(l.net)}</td>
                        <td className="launches-table__td">{l.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}