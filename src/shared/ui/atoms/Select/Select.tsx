import type {SelectHTMLAttributes} from "react";

export interface SelectProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
    options: readonly {
        value: string;
        label: string;
    }[];
    invalid?: boolean;
}

export function Select({
                           options,
                           invalid = false,
                           className = "",
                           ...props
                       }: SelectProps) {
    return (
        <select
            {...props}
            aria-invalid={invalid || undefined}
            className={`ds-control ${
                invalid ? "ds-control--invalid" : ""
            } ${className}`}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}