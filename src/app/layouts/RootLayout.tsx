import { Link, Outlet } from "react-router";
import ThemeToggle from "../../features/theme/components/ThemeToggle/ThemeToggle.tsx";
import { useTheme } from "../../features/theme/hooks/UseTheme.ts";
import "../App.css";

export default function RootLayout() {
    const { isDark } = useTheme();

    return (
        <div className="app" data-theme={isDark ? "dark" : "light"}>
            <main className="app__main">
                <header className="app__header">
                    <h1>
                        <Link to="/" className="app__title">Космічні запуски</Link>
                    </h1>
                    <ThemeToggle />
                </header>
                <Outlet />
            </main>
        </div>
    );
}