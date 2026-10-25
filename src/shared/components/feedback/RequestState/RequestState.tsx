import type { ReactNode } from "react";
import Button from "../../ui/Button/Button.tsx";
import "./RequestState.css";

interface RequestStateProps {
    loading: boolean;
    error: string | null;
    isEmpty: boolean;
    onRetry: () => void;
    children: ReactNode;
}

export default function RequestState({
                                         loading,
                                         error,
                                         isEmpty,
                                         onRetry,
                                         children,
                                     }: RequestStateProps) {
    if (loading) {
        return (
            <section className="request-state" role="status">
                <p>Завантаження запусків…</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="request-state request-state--error" role="alert">
                <h3>Не вдалося завантажити дані</h3>
                <p>{error}</p>
                <Button onClick={onRetry}>Спробувати ще раз</Button>
            </section>
        );
    }

    if (isEmpty) {
        return (
            <section className="request-state" role="status">
                <p>За цими фільтрами нічого не знайдено.</p>
            </section>
        );
    }

    return <>{children}</>;
}