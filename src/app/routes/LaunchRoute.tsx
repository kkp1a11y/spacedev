import { Navigate, useNavigate, useParams } from "react-router";
import { Button } from "../../shared/ui/atoms/Button/Button.tsx";
import { Spinner } from "../../shared/ui/atoms/Spinner/Spinner.tsx";
import { Card } from "../../shared/ui/molecules/Card/Card.tsx";
import LaunchDetails from "../../features/launches/components/LaunchDetails/LaunchDetails.tsx";
import { useLaunchDetails } from "../../features/launches/hooks/UseLaunchDetails.ts";

export default function LaunchRoute() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Navigate to="/" replace />;
    }

    return <LaunchPage id={id} />;
}

function LaunchPage({ id }: { id: string }) {
    const navigate = useNavigate();
    const { launch, loading, error, notFound, reload } =
        useLaunchDetails(id);

    return (
        <div className="ds-stack launch-details">
            <div>
                <Button
                    variant="secondary"
                    onClick={() => navigate("/")}
                >
                    ← Назад
                </Button>
            </div>

            {loading && (
                <Card>
                    <Spinner label="Завантаження деталей…" />
                </Card>
            )}

            {error && (
                <Card title="Не вдалося завантажити дані">
                    <div className="ds-stack" role="alert">
                        <p>{error}</p>
                        <Button onClick={reload}>
                            Спробувати ще раз
                        </Button>
                    </div>
                </Card>
            )}

            {notFound && (
                <Card title="Запуск не знайдено">
                    <p role="status">
                        Запуску з ідентифікатором «{id}» не існує.
                    </p>
                </Card>
            )}

            {launch && <LaunchDetails launch={launch} />}
        </div>
    );
}