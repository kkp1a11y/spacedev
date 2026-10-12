interface CategorySelectProps {
    options: string[];
    value: string;
    allValue: string;
    allLabel: string;
    onChange: (value: string) => void;
}

export default function CategorySelect({
                                           options,
                                           value,
                                           allValue,
                                           allLabel,
                                           onChange,
                                       }: CategorySelectProps) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value={allValue}>{allLabel}</option>
            {options.map((o) => (
                <option key={o} value={o}>{o}</option>
            ))}
        </select>
    );
}