import { useNavigate } from "react-router";
import { Button } from "../../shared/ui/atoms/Button/Button.tsx";
import { Card } from "../../shared/ui/molecules/Card/Card.tsx";

export default function NotFoundRoute() {
    const navigate = useNavigate();

    return (
        <Card title="Сторінку не знайдено">
            <Button onClick={() => navigate("/")}>
                На головну
            </Button>
        </Card>
    );
}