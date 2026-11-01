import { Controller } from "react-hook-form";
import Button from "../../../../shared/components/ui/Button/Button.tsx";
import Counter from "../../../../shared/components/ui/Counter/Counter.tsx";
import SearchInput from "../../../../shared/components/ui/SearchInput/SearchInput.tsx";
import StatusFilter from "../StatusFilter/StatusFilter.tsx";
import { useLaunchFiltersContext } from "../../hooks/UseLaunchFiltersContext.ts";
import { DEFAULT_FILTERS, LIMIT_MAX, LIMIT_MIN, LIMIT_STEP } from "../../Constants.ts";
import "./LaunchesFilters.css";

export default function LaunchesFilters() {
    const { control, resetFilters } = useLaunchFiltersContext();

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
            <Button onClick={resetFilters}>Скинути фільтри</Button>
        </form>
    );
}