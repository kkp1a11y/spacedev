import type {ReactNode} from "react";

export function Field({
                          label,
                          inline = false,
                          children,
                      }: {
    label: string;
    inline?: boolean;
    children: ReactNode;
}) {
    return (
        <label className={`ds-field ${inline ? "ds-field--inline" : ""}`}>
            <span>{label}</span>
            {children}
        </label>
    );
}