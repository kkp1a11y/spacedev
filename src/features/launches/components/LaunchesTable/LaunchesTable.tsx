import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import SortHeader from "../SortHeader/SortHeader.tsx";
import LaunchRow from "./LaunchRow.tsx";
import type { Launch, SortKey } from "../../Types.ts";
import "./LaunchesTable.css";

interface LaunchesTableProps {
    launches: Launch[];
}

export default function LaunchesTable({ launches }: LaunchesTableProps) {
    const sort = useAppStore((state) => state.sort);
    const toggleSort = useAppStore((state) => state.toggleSort);

    const getDirection = (key: SortKey) =>
        sort.key === key ? sort.dir : null;

    return (
        <div className="launches-table__wrapper">
            <table className="launches-table">
                <thead>
                <tr>
                    <SortHeader
                        label="Місія"
                        direction={getDirection("name")}
                        onSort={() => toggleSort("name")}
                    />

                    <SortHeader
                        label="Агенція"
                        direction={getDirection("agency")}
                        onSort={() => toggleSort("agency")}
                    />

                    <th className="launches-table__th">
                        Ракета
                    </th>

                    <th className="launches-table__th">
                        Майданчик
                    </th>

                    <SortHeader
                        label="Дата"
                        direction={getDirection("net")}
                        onSort={() => toggleSort("net")}
                    />

                    <th className="launches-table__th">
                        Статус
                    </th>

                    <th className="launches-table__th">
                        Обране
                    </th>
                </tr>
                </thead>

                <tbody>
                {launches.map((launch) => (
                    <LaunchRow
                        key={launch.id}
                        launch={launch}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}