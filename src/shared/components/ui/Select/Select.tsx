import "./Select.css";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    label: string;
    value: string;
    options: readonly SelectOption[];
    allLabel: string;
    onChange: (value: string) => void;
}

export default function Select({ label, value, options, allLabel, onChange }: SelectProps) {
    return (
        <label className="select">
            <span className="select__label">{label}</span>
            <select
                className="select__field"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">{allLabel}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
        </label>
    );
}