import type {ButtonHTMLAttributes} from "react";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md";
}

export function Button({
                           variant = "primary",
                           size = "md",
                           type = "button",
                           className = "",
                           ...props
                       }: ButtonProps) {
    return (
        <button
            {...props}
            type={type}
            className={`ds-button ds-button--${variant} ds-button--${size} ${className}`}
        />
    );
}