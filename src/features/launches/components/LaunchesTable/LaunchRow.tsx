import { useNavigate } from "react-router";
import { formatDateTime } from "../../../../shared/utils/FormatDate.ts";
import FavoriteButton from "../../../favorites/components/FavoriteButton/FavoriteButton.tsx";
import type { Launch } from "../../Types.ts";

interface LaunchRowProps {
    launch: Launch;
}

export default function LaunchRow({ launch }: LaunchRowProps) {
    const navigate = useNavigate();

    const openDetails = () => {
        navigate(`/launch/${encodeURIComponent(launch.id)}`);
    };

    return (
        <tr
            className="launches-table__row"
            tabIndex={0}
            aria-label={`Відкрити запуск: ${launch.name}`}
            onClick={openDetails}
            onKeyDown={(event) => {
                if (event.target !== event.currentTarget) {
                    return;
                }

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openDetails();
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
    );
}