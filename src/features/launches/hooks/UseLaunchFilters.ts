import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDebounce } from "../../../shared/hooks/UseDebounce.ts";
import { DEBOUNCE_MS, DEFAULT_FILTERS } from "../Constants.ts";
import type { LaunchFilters } from "../Types.ts";

export function useLaunchFilters() {
    const { control, reset } = useForm<LaunchFilters>({ defaultValues: DEFAULT_FILTERS });
    const [search, status, limit] = useWatch({ control, name: ["search", "status", "limit"] });

    const values = useMemo<LaunchFilters>(
        () => ({ search, status, limit }),
        [search, status, limit],
    );
    const params = useDebounce(values, DEBOUNCE_MS);

    return { control, params, resetFilters: () => reset() };
}