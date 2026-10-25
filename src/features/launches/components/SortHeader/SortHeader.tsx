import type { SortDir } from "../../Types.ts";
import "./SortHeader.css";

interface SortHeaderProps {
    label: string;
    direction: SortDir | null;
    onSort: () => void;
}

const ARROWS: Record<SortDir, string> = { asc: " ▲", desc: " ▼" };
const ARIA_SORT = { asc: "ascending", desc: "descending" } as const;

export default function SortHeader({ label, direction, onSort }: SortHeaderProps) {
    return (
        <th
            className="launches-table__th sort-header"
            aria-sort={direction ? ARIA_SORT[direction] : "none"}
            onClick={onSort}
        >
            {label}
            {direction && ARROWS[direction]}
        </th>
    );
}