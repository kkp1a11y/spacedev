import { Link, Navigate, useParams } from "react-router";
import Button from "../../shared/components/ui/Button/Button.tsx";
import LaunchDetails from "../../features/launches/components/LaunchDetails/LaunchDetails.tsx";
import { useLaunchDetails } from "../../features/launches/hooks/UseLaunchDetails.ts";

export default function LaunchRoute() {
    const { id } = useParams<{ id: string }>();
    if (!id) return <Navigate to="/" replace />;
    return <LaunchPage id={id} />;
}

function LaunchPage({ id }: { id: string }) {
    const { launch, loading, error, notFound, reload } = useLaunchDetails(id);

    return (
        <section className="section">
            <Link to="/" className="button">← Назад</Link>

            {loading && <p role="status">Завантаження деталей…</p>}

            {error && (
                <div role="alert">
                    <h3>Не вдалося завантажити дані</h3>
                    <p>{error}</p>
                    <Button onClick={reload}>Спробувати ще раз</Button>
                </div>
            )}

            {notFound && (
                <div role="status">
                    <h3>Запуск не знайдено</h3>
                    <p>Запуску з ідентифікатором «{id}» не існує.</p>
                </div>
            )}

            {launch && <LaunchDetails launch={launch} />}
        </section>
    );
}