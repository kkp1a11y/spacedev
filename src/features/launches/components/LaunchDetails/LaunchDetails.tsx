import { formatDateTime } from "../../../../shared/utils/FormatDate.ts";
import type { LaunchDetails as LaunchDetailsData } from "../../Types.ts";
import FavoriteButton from "../../../favorites/components/FavoriteButton/FavoriteButton.tsx";
import { Card } from "../../../../shared/ui/molecules/Card/Card.tsx";
import { Table } from "../../../../shared/ui/organisms/Table/Table.tsx";
import { TableRow } from "../../../../shared/ui/molecules/TableRow/TableRow.tsx";

export default function LaunchDetails({ launch }: { launch: LaunchDetailsData }) {
    const rows: [string, string][] = [
        ["Агенція", launch.agency],
        ["Ракета", launch.rocket],
        ["Майданчик", launch.pad],
        ["Локація", launch.location],
        ["Статус", launch.statusName],
        ["Тип місії", launch.missionType ?? "—"],
        ["Орбіта", launch.orbit ?? "—"],
        ["Дата запуску", formatDateTime(launch.net)],
        ["Вікно запуску", `${formatDateTime(launch.windowStart)} — ${formatDateTime(launch.windowEnd)}`],
    ];

    return (
        <Card title={launch.name}>
            <div className="ds-stack">
                <div>
                    <FavoriteButton id={launch.id} name={launch.name} />
                </div>

                {launch.image && (
                    <img
                        className="launch-details__image"
                        src={launch.image}
                        alt={launch.name}
                    />
                )}

                <Table
                    compact
                    label="Характеристики запуску"
                    columns={[
                        { label: "Поле" },
                        { label: "Значення" },
                    ]}
                >
                    {rows.map(([label, value]) => (
                        <TableRow
                            key={label}
                            cells={[label, value]}
                        />
                    ))}
                </Table>

                {launch.statusDescription && (
                    <p>{launch.statusDescription}</p>
                )}

                {launch.missionDescription && (
                    <p>{launch.missionDescription}</p>
                )}
            </div>
        </Card>
    );
}