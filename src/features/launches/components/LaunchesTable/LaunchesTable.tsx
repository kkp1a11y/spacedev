import { useNavigate } from "react-router";
import { formatDateTime } from "../../../../shared/utils/FormatDate.ts";
import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import FavoriteButton from "../../../favorites/components/FavoriteButton/FavoriteButton.tsx";
import SortHeader from "../SortHeader/SortHeader.tsx";
import type { Launch, SortKey } from "../../Types.ts";
import "./LaunchesTable.css";

interface LaunchesTableProps {
    launches: Launch[];
}

export default function LaunchesTable({ launches }: LaunchesTableProps) {
    const navigate = useNavigate();
    const sort = useAppStore((state) => state.sort);
    const onSort = useAppStore((state) => state.toggleSort);

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
                        onSort={() => onSort("name")}
                    />

                    <SortHeader
                        label="Агенція"
                        direction={getDirection("agency")}
                        onSort={() => onSort("agency")}
                    />

                    <th className="launches-table__th">Ракета</th>
                    <th className="launches-table__th">Майданчик</th>

                    <SortHeader
                        label="Дата"
                        direction={getDirection("net")}
                        onSort={() => onSort("net")}
                    />

                    <th className="launches-table__th">Статус</th>
                    <th className="launches-table__th">Обране</th>
                </tr>
                </thead>

                <tbody>
                {launches.map((launch) => (
                    <tr
                        key={launch.id}
                        className="launches-table__row"
                        tabIndex={0}
                        aria-label={`Відкрити запуск: ${launch.name}`}
                        onClick={() =>
                            navigate(
                                `/launch/${encodeURIComponent(launch.id)}`,
                            )
                        }
                        onKeyDown={(event) => {
                            if (event.target !== event.currentTarget) {
                                return;
                            }

                            if (
                                event.key === "Enter" ||
                                event.key === " "
                            ) {
                                event.preventDefault();

                                navigate(
                                    `/launch/${encodeURIComponent(launch.id)}`,
                                );
                            }
                        }}
                    >
                        <td className="launches-table__td">
                            {launch.name}
                        </td>

                        <td className="launches-table__td">
                            {launch.agency}
                        </td>

                        <td className="launches-table__td">
                            {launch.rocket}
                        </td>

                        <td className="launches-table__td">
                            {launch.pad}
                        </td>

                        <td className="launches-table__td">
                            {formatDateTime(launch.net)}
                        </td>

                        <td className="launches-table__td">
                            {launch.status}
                        </td>

                        <td className="launches-table__td">
                            <FavoriteButton
                                id={launch.id}
                                name={launch.name}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}