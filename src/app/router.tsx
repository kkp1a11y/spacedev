import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "./layouts/RootLayout.tsx";
import DashboardRoute from "./routes/DashboardRoute.tsx";
import LaunchRoute from "./routes/LaunchRoute.tsx";
import NotFoundRoute from "./routes/NotFoundRoute.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<DashboardRoute />} />
            <Route path="launch/:id" element={<LaunchRoute />} />
            <Route path="*" element={<NotFoundRoute />} />
        </Route>,
    ),
);