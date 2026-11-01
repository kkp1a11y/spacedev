import { useTheme } from "../../hooks/UseTheme.ts";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const { isDark, setIsDark } = useTheme();

    return (
        <label className="theme-toggle">
            <input
                type="checkbox"
                checked={isDark}
                onChange={(e) => setIsDark(e.target.checked)}
            />
            {isDark ? "Темна тема" : "Світла тема"}
        </label>
    );
}