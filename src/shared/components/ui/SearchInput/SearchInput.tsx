import "./SearchInput.css";

interface SearchInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function SearchInput({ label, value, onChange, placeholder }: SearchInputProps) {
    return (
        <label className="search-input">
            <span className="search-input__label">{label}</span>
            <input
                className="search-input__field"
                type="search"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
}