import type { ReactNode } from "react";

export function FilterPanel({
                                children,
                                direction = "row",
                            }: {
    children: ReactNode;
    direction?: "row" | "column";
}) {
    return (
        <form
            className={`ds-filter-panel ds-filter-panel--${direction}`}
            onSubmit={(event) => event.preventDefault()}
        >
            {children}
        </form>
    );
}