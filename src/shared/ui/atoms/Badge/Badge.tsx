import type {ReactNode} from "react";

export type BadgeTone =
    | "neutral"
    | "success"
    | "danger"
    | "warning";

export function Badge({
                          children,
                          tone = "neutral",
                      }: {
    children: ReactNode;
    tone?: BadgeTone;
}) {
    return (
        <span className={`ds-badge ds-badge--${tone}`}>
            {children}
        </span>
    );
}