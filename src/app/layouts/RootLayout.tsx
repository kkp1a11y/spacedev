import { Link, Outlet } from "react-router";
import ThemeToggle from "../../features/theme/components/ThemeToggle/ThemeToggle.tsx";
import { useAppStore } from "../store/UseAppStore.ts";
import "../App.css";

export default function RootLayout() {
    const isDark = useAppStore((state) => state.isDark);

    return (
        <div className="app" data-theme={isDark ? "dark" : "light"}>
            <main className="app__main">
                <header className="app__header">
                    <h1>
                        <Link to="/" className="app__title">
                            Космічні запуски
                        </Link>
                    </h1>

                    <ThemeToggle />
                </header>

                <Outlet />
            </main>
        </div>
    );
}