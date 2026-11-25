import type { ReactNode } from "react";

export interface TableRowProps {
    cells: ReactNode[];
    label?: string;
    onActivate?: () => void;
}

export function TableRow({
                             cells,
                             label,
                             onActivate,
                         }: TableRowProps) {
    return (
        <tr
            className={onActivate ? "ds-row--interactive" : undefined}
            tabIndex={onActivate ? 0 : undefined}
            aria-label={label}
            onClick={onActivate}
            onKeyDown={(event) => {
                if (!onActivate || event.target !== event.currentTarget) {
                    return;
                }

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onActivate();
                }
            }}
        >
            {cells.map((cell, index) => (
                <td key={index}>{cell}</td>
            ))}
        </tr>
    );
}