import "./ThemeToggle.css";

interface ThemeToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export default function ThemeToggle({ checked, onChange }: ThemeToggleProps) {
    return (
        <label className="theme-toggle">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            {checked ? "Темна тема" : "Світла тема"}
        </label>
    );
}