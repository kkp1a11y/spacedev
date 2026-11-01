import { formatDateTime } from "../../../../shared/utils/FormatDate.ts";
import type { LaunchDetails as LaunchDetailsData } from "../../Types.ts";
import "./LaunchDetails.css";

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
        <article className="launch-details">
            <h2>{launch.name}</h2>
            {launch.image && (
                <img className="launch-details__image" src={launch.image} alt={launch.name} />
            )}
            <dl className="launch-details__list">
                {rows.map(([term, value]) => (
                    <div key={term} className="launch-details__row">
                        <dt>{term}</dt>
                        <dd>{value}</dd>
                    </div>
                ))}
            </dl>
            {launch.statusDescription && <p>{launch.statusDescription}</p>}
            {launch.missionDescription && <p>{launch.missionDescription}</p>}
        </article>
    );
}