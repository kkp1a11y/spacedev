import { Controller, type Control } from "react-hook-form";
import Button from "../../../../shared/components/ui/Button/Button.tsx";
import Counter from "../../../../shared/components/ui/Counter/Counter.tsx";
import SearchInput from "../../../../shared/components/ui/SearchInput/SearchInput.tsx";
import StatusFilter from "../StatusFilter/StatusFilter.tsx";
import { DEFAULT_FILTERS, LIMIT_MAX, LIMIT_MIN, LIMIT_STEP } from "../../Constants.ts";
import type { LaunchFilters } from "../../Types.ts";
import "./LaunchesFilters.css";

interface LaunchesFiltersProps {
    control: Control<LaunchFilters>;
    onReset: () => void;
}

export default function LaunchesFilters({ control, onReset }: LaunchesFiltersProps) {
    return (
        <form className="launches-filters" onSubmit={(e) => e.preventDefault()}>
            <Controller
                name="search"
                control={control}
                render={({ field }) => (
                    <SearchInput
                        label="Пошук за назвою"
                        placeholder="Напр. Starlink"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                name="status"
                control={control}
                render={({ field }) => (
                    <StatusFilter value={field.value} onChange={field.onChange} />
                )}
            />
            <Controller
                name="limit"
                control={control}
                render={({ field }) => (
                    <Counter
                        label="Кількість у таблиці"
                        value={field.value}
                        onChange={field.onChange}
                        min={LIMIT_MIN}
                        max={LIMIT_MAX}
                        step={LIMIT_STEP}
                        initial={DEFAULT_FILTERS.limit}
                    />
                )}
            />
            <Button onClick={onReset}>Скинути фільтри</Button>
        </form>
    );
}