import Button from "../../../../shared/components/ui/Button/Button.tsx";
import Counter from "../../../../shared/components/ui/Counter/Counter.tsx";
import SearchInput from "../../../../shared/components/ui/SearchInput/SearchInput.tsx";
import StatusFilter from "../StatusFilter/StatusFilter.tsx";
import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import {
    DEFAULT_FILTERS,
    LIMIT_MAX,
    LIMIT_MIN,
    LIMIT_STEP,
} from "../../Constants.ts";
import "./LaunchesFilters.css";

export default function LaunchesFilters() {
    const filters = useAppStore((state) => state.filters);
    const setFilters = useAppStore((state) => state.setFilters);
    const resetFilters = useAppStore((state) => state.resetFilters);

    const onlyFavorites = useAppStore((state) => state.onlyFavorites);
    const setOnlyFavorites = useAppStore((state) => state.setOnlyFavorites);
    const favoriteCount = useAppStore((state) => state.favoriteIds.length);

    return (
        <form
            className="launches-filters"
            onSubmit={(event) => event.preventDefault()}
        >
            <SearchInput
                label="Пошук за назвою"
                placeholder="Напр. Starlink"
                value={filters.search}
                onChange={(search) => setFilters({ search })}
            />

            <StatusFilter
                value={filters.status}
                onChange={(status) => setFilters({ status })}
            />

            <Counter
                label="Кількість у таблиці"
                value={filters.limit}
                onChange={(limit) => setFilters({ limit })}
                min={LIMIT_MIN}
                max={LIMIT_MAX}
                step={LIMIT_STEP}
                initial={DEFAULT_FILTERS.limit}
            />

            <label>
                <input
                    type="checkbox"
                    checked={onlyFavorites}
                    onChange={(event) =>
                        setOnlyFavorites(event.target.checked)
                    }
                />
                Лише обране ({favoriteCount})
            </label>

            <Button onClick={resetFilters}>
                Скинути фільтри
            </Button>
        </form>
    );
}