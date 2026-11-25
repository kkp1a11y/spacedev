import type {InputHTMLAttributes} from "react";

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
}

export function Input({
                          invalid = false,
                          className = "",
                          ...props
                      }: InputProps) {
    return (
        <input
            {...props}
            aria-invalid={invalid || undefined}
            className={`ds-control ${
                invalid ? "ds-control--invalid" : ""
            } ${className}`}
        />
    );
}