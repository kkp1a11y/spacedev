import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import { Select } from "../../../../shared/ui/atoms/Select/Select.tsx";
import { Input } from "../../../../shared/ui/atoms/Input/Input.tsx";
import { Button } from "../../../../shared/ui/atoms/Button/Button.tsx";
import { Field } from "../../../../shared/ui/molecules/Field/Field.tsx";
import { Counter } from "../../../../shared/ui/molecules/Counter/Counter.tsx";
import { FilterPanel } from "../../../../shared/ui/organisms/FilterPanel/FilterPanel.tsx";
import {
    DEFAULT_FILTERS,
    LIMIT_MIN,
    LIMIT_MAX,
    LIMIT_STEP,
    STATUS_OPTIONS,
} from "../../Constants.ts";

export default function LaunchesFilters() {
    const filters = useAppStore((s) => s.filters);
    const setFilters = useAppStore((s) => s.setFilters);
    const resetFilters = useAppStore((s) => s.resetFilters);
    const onlyFavorites = useAppStore((s) => s.onlyFavorites);
    const setOnlyFavorites = useAppStore((s) => s.setOnlyFavorites);
    const count = useAppStore((s) => s.favoriteIds.length);

    return (
        <FilterPanel>
            <Field label="Пошук за назвою">
                <Input
                    type="search"
                    placeholder="Напр. Starlink"
                    value={filters.search}
                    onChange={(event) =>
                        setFilters({ search: event.target.value })
                    }
                />
            </Field>

            <Field label="Статус">
                <Select
                    value={filters.status}
                    options={[
                        { value: "", label: "Усі статуси" },
                        ...STATUS_OPTIONS,
                    ]}
                    onChange={(event) =>
                        setFilters({ status: event.target.value })
                    }
                />
            </Field>

            <Counter
                label="Кількість у таблиці"
                value={filters.limit}
                onChange={(limit) => setFilters({ limit })}
                min={LIMIT_MIN}
                max={LIMIT_MAX}
                step={LIMIT_STEP}
                initial={DEFAULT_FILTERS.limit}
            />

            <Field inline label={`Лише обране (${count})`}>
                <Input
                    type="checkbox"
                    checked={onlyFavorites}
                    onChange={(event) =>
                        setOnlyFavorites(event.target.checked)
                    }
                />
            </Field>

            <Button
                size="sm"
                variant="secondary"
                onClick={resetFilters}
            >
                Скинути фільтри
            </Button>
        </FilterPanel>
    );
}