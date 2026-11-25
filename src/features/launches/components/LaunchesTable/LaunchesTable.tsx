import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import { Table } from "../../../../shared/ui/organisms/Table/Table.tsx";
import LaunchRow from "./LaunchRow.tsx";
import type { Launch, SortKey } from "../../Types.ts";

export default function LaunchesTable({ launches }: { launches: Launch[] }) {
    const sort = useAppStore((s) => s.sort);
    const toggleSort = useAppStore((s) => s.toggleSort);

    const sortable = (label: string, key: SortKey) => ({
        label,
        direction: sort.key === key ? sort.dir : null,
        onSort: () => toggleSort(key),
    });

    return (
        <Table
            compact
            label="Космічні запуски"
            columns={[
                sortable("Місія", "name"),
                sortable("Агенція", "agency"),
                { label: "Ракета" },
                { label: "Майданчик" },
                sortable("Дата", "net"),
                { label: "Статус" },
                { label: "Обране" },
            ]}
        >
            {launches.map((launch) => (
                <LaunchRow key={launch.id} launch={launch} />
            ))}
        </Table>
    );
}