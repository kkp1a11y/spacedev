import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import { Button } from "../../../../shared/ui/atoms/Button/Button.tsx";

interface FavoriteButtonProps {
    id: string;
    name: string;
}

export default function FavoriteButton({ id, name }: FavoriteButtonProps) {
    const isFavorite = useAppStore((state) =>
        state.favoriteIds.includes(id),
    );

    const toggleFavorite = useAppStore((state) => state.toggleFavorite);

    return (
        <Button
            size="sm"
            variant={isFavorite ? "primary" : "secondary"}
            aria-pressed={isFavorite}
            aria-label={`${
                isFavorite ? "Видалити з обраного" : "Додати в обране"
            }: ${name}`}
            onClick={(event) => {
                event.stopPropagation();
                toggleFavorite(id);
            }}
        >
            {isFavorite ? "В обраному" : "В обране"}
        </Button>
    );
}