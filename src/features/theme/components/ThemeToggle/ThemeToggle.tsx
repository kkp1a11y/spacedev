import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const isDark = useAppStore((state) => state.isDark);
    const setIsDark = useAppStore((state) => state.setIsDark);

    return (
        <label className="theme-toggle">
            <input
                type="checkbox"
                checked={isDark}
                onChange={(event) => setIsDark(event.target.checked)}
            />

            {isDark ? "Темна тема" : "Світла тема"}
        </label>
    );
}