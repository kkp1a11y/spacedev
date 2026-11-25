import type {HTMLAttributes} from "react";

export interface CardProps
    extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    title?: string;
    variant?: "outlined" | "raised";
    compact?: boolean;
}

export function Card({
                         title,
                         variant = "outlined",
                         compact = false,
                         className = "",
                         children,
                         ...props
                     }: CardProps) {
    return (
        <section
            {...props}
            className={`ds-card ds-card--${variant} ${
                compact ? "ds-card--compact" : ""
            } ${className}`}
        >
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}