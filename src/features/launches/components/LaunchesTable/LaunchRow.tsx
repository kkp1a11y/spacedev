import { useNavigate } from "react-router";
import { formatDateTime } from "../../../../shared/utils/FormatDate.ts";
import { Badge } from "../../../../shared/ui/atoms/Badge/Badge.tsx";
import { TableRow } from "../../../../shared/ui/molecules/TableRow/TableRow.tsx";
import FavoriteButton from "../../../favorites/components/FavoriteButton/FavoriteButton.tsx";
import type { Launch } from "../../Types.ts";

export default function LaunchRow({ launch }: { launch: Launch }) {
    const navigate = useNavigate();

    const tone =
        launch.status === "Success"
            ? "success"
            : ["Failure", "Partial Failure"].includes(launch.status)
                ? "danger"
                : "neutral";

    return (
        <TableRow
            label={`Відкрити запуск: ${launch.name}`}
            onActivate={() =>
                navigate(`/launch/${encodeURIComponent(launch.id)}`)
            }
            cells={[
                launch.name,
                launch.agency,
                launch.rocket,
                launch.pad,
                formatDateTime(launch.net),
                <Badge tone={tone}>{launch.status}</Badge>,
                <FavoriteButton id={launch.id} name={launch.name} />,
            ]}
        />
    );
}