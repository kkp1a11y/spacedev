import { create } from "zustand";
import {
    ALL_AGENCIES,
    DEFAULT_FILTERS,
    DEFAULT_SORT,
} from "../../features/launches/Constants.ts";
import { getNextSort } from "../../features/launches/services/LaunchesSort.ts";
import type {
    LaunchFilters,
    Sort,
    SortKey,
} from "../../features/launches/Types.ts";
import type { ChartType } from "../../shared/components/charts/Types.ts";

interface AppState {
    isDark: boolean;
    filters: LaunchFilters;
    agency: string;
    sort: Sort;
    favoriteIds: string[];
    onlyFavorites: boolean;
    chartType: ChartType;

    setIsDark: (value: boolean) => void;
    setFilters: (patch: Partial<LaunchFilters>) => void;
    setAgency: (agency: string) => void;
    toggleSort: (key: SortKey) => void;
    toggleFavorite: (id: string) => void;
    setOnlyFavorites: (value: boolean) => void;
    setChartType: (type: ChartType) => void;
    resetFilters: () => void;
}

export const useAppStore = create<AppState>((set) => ({
    isDark: false,
    filters: { ...DEFAULT_FILTERS },
    agency: ALL_AGENCIES,
    sort: { ...DEFAULT_SORT },
    favoriteIds: [],
    onlyFavorites: false,
    chartType: "bar",

    setIsDark: (isDark) => set({ isDark }),

    setFilters: (patch) =>
        set((state) => ({
            filters: { ...state.filters, ...patch },
        })),

    setAgency: (agency) => set({ agency }),

    toggleSort: (key) =>
        set((state) => ({
            sort: getNextSort(state.sort, key),
        })),

    toggleFavorite: (id) =>
        set((state) => ({
            favoriteIds: state.favoriteIds.includes(id)
                ? state.favoriteIds.filter((favoriteId) => favoriteId !== id)
                : [...state.favoriteIds, id],
        })),

    setOnlyFavorites: (onlyFavorites) => set({ onlyFavorites }),

    setChartType: (chartType) => set({ chartType }),

    resetFilters: () =>
        set({
            filters: { ...DEFAULT_FILTERS },
            agency: ALL_AGENCIES,
            onlyFavorites: false,
            sort: { ...DEFAULT_SORT },
        }),
}));