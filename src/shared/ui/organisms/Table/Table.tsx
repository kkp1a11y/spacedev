import type { ReactNode } from "react";
import { Button } from "../../atoms/Button/Button.tsx";

export interface TableColumn {
    label: string;
    direction?: "asc" | "desc" | null;
    onSort?: () => void;
}

interface TableProps {
    columns: TableColumn[];
    children: ReactNode;
    compact?: boolean;
    label: string;
}

export function Table({
                          columns,
                          children,
                          compact = false,
                          label,
                      }: TableProps) {
    return (
        <div className="ds-table-scroll">
            <table
                aria-label={label}
                className={`ds-table ${compact ? "ds-table--compact" : ""}`}
            >
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.label}
                            aria-sort={
                                column.onSort
                                    ? column.direction === "asc"
                                        ? "ascending"
                                        : column.direction === "desc"
                                            ? "descending"
                                            : "none"
                                    : undefined
                            }
                        >
                            {column.onSort ? (
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    onClick={column.onSort}
                                >
                                    {column.label}
                                    {column.direction === "asc"
                                        ? " ▲"
                                        : column.direction === "desc"
                                            ? " ▼"
                                            : ""}
                                </Button>
                            ) : (
                                column.label
                            )}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>{children}</tbody>
            </table>
        </div>
    );
}