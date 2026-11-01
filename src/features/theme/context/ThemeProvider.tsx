import { useMemo, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext.ts";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(false);
    const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}