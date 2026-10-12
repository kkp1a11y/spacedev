import type { ReactNode } from "react";

interface DataStateProps {
    loading: boolean;
    error: string | null;
    isEmpty: boolean;
    children: ReactNode;
}

export default function DataState({ loading, error, isEmpty, children }: DataStateProps) {
    if (loading) return <p>Завантаження…</p>;
    if (error) return <p>Помилка: {error}</p>;
    if (isEmpty) return <p>Даних немає</p>;
    return <>{children}</>;
}