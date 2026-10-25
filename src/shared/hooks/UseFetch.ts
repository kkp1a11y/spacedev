import { useCallback, useEffect, useState } from "react";
import type { AsyncState } from "../types/Async.types.ts";
import { getErrorMessage } from "../utils/GetErrorMessage.ts";

interface Settled<T, P> {
    params: P;
    reloadKey: number;
    data: T | null;
    error: string | null;
}

export function useFetch<T, P>(
    fetcher: (params: P, signal: AbortSignal) => Promise<T>,
    params: P,
): AsyncState<T> & { reload: () => void } {
    const [settled, setSettled] = useState<Settled<T, P> | null>(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        fetcher(params, controller.signal)
            .then((data) => {
                if (controller.signal.aborted) return;
                setSettled({ params, reloadKey, data, error: null });
            })
            .catch((e: unknown) => {
                if (controller.signal.aborted) return;
                setSettled({ params, reloadKey, data: null, error: getErrorMessage(e) });
            });

        return () => controller.abort();
    }, [fetcher, params, reloadKey]);

    const reload = useCallback(() => setReloadKey((k) => k + 1), []);

    const loading =
        settled === null || settled.params !== params || settled.reloadKey !== reloadKey;

    return {
        data: loading ? null : settled.data,
        loading,
        error: loading ? null : settled.error,
        reload,
    };
}