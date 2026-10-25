import Select from "../../../../shared/components/ui/Select/Select.tsx";
import { STATUS_OPTIONS } from "../../Constants.ts";
import "./StatusFilter.css";

interface StatusFilterProps {
    value: string;
    onChange: (status: string) => void;
}

export default function StatusFilter({ value, onChange }: StatusFilterProps) {
    return (
        <div className="status-filter">
            <Select
                label="Статус"
                allLabel="Усі статуси"
                value={value}
                options={STATUS_OPTIONS}
                onChange={onChange}
            />
        </div>
    );
}