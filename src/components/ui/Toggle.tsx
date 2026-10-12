interface ToggleProps {
    labelOn: string;
    labelOff: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function Toggle({ labelOn, labelOff, checked, onChange }: ToggleProps) {
    return (
        <label className="toggle">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            {checked ? labelOn : labelOff}
        </label>
    );
}