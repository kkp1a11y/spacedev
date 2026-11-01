import type { ReactNode } from "react";
import ThemeProvider from "../../features/theme/context/ThemeProvider.tsx";
import LaunchFiltersProvider from "../../features/launches/context/LaunchFiltersProvider.tsx";

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <LaunchFiltersProvider>{children}</LaunchFiltersProvider>
        </ThemeProvider>
    );
}