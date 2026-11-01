import { fetchLaunchById } from "../api/LaunchesApi.ts";
import { useFetch } from "../../../shared/hooks/UseFetch.ts";

export function useLaunchDetails(id: string) {
    const { data, loading, error, reload } = useFetch(fetchLaunchById, id);

    return {
        launch: data,
        loading,
        error,
        notFound: !loading && !error && data === null,
        reload,
    };
}