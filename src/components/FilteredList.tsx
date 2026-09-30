import { useState } from "react";
import type { Launch } from "../types";
import CategorySelect from "./CategorySelect";
import LaunchTable from "./LaunchTable";

const ALL = "all";

interface FilteredListProps {
    items: Launch[];
}

export default function FilteredList({ items }: FilteredListProps) {
    const [agency, setAgency] = useState(ALL);

    const agencies = [...new Set(items.map((i) => i.agency))];
    const visible = agency === ALL ? items : items.filter((i) => i.agency === agency);

    return (
        <div>
            <CategorySelect
                options={agencies}
                value={agency}
                allValue={ALL}
                allLabel="Усі агенції"
                onChange={setAgency}
            />
            <LaunchTable launches={visible} />
        </div>
    );
}