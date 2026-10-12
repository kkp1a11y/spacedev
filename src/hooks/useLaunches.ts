import { useEffect, useState } from "react";
import { fetchLaunches } from "../api/launches";
import type { Launch } from "../types";

export function useLaunches() {
    const [launches, setLaunches] = useState<Launch[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        fetchLaunches(controller.signal)
            .then(setLaunches)
            .catch((e: unknown) => {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Невідома помилка");
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { launches, loading, error };
}