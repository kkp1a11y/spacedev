import { useState, type ReactNode } from "react";
import CategorySelect from "../ui/CategorySelect.tsx";

const ALL = "all";

interface FilteredListProps<T> {
    items: T[];
    getCategory: (item: T) => string;
    allLabel: string;
    children: (visibleItems: T[]) => ReactNode;
}

export default function FilteredList<T>({
                                            items,
                                            getCategory,
                                            allLabel,
                                            children,
                                        }: FilteredListProps<T>) {
    const [category, setCategory] = useState(ALL);

    const categories = Array.from(new Set(items.map(getCategory)));
    const visible =
        category === ALL ? items : items.filter((i) => getCategory(i) === category);

    return (
        <div>
            <CategorySelect
                options={categories}
                value={category}
                allValue={ALL}
                allLabel={allLabel}
                onChange={setCategory}
            />
            {children(visible)}
        </div>
    );
}