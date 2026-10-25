import Select from "../../../../shared/components/ui/Select/Select.tsx";
import "./AgencyFilter.css";

interface AgencyFilterProps {
    agencies: string[];
    value: string;
    onChange: (agency: string) => void;
}

export default function AgencyFilter({ agencies, value, onChange }: AgencyFilterProps) {
    const options = agencies.map((a) => ({ value: a, label: a }));

    return (
        <div className="agency-filter">
            <Select
                label="Агенція"
                allLabel="Усі агенції"
                value={value}
                options={options}
                onChange={onChange}
            />
        </div>
    );
}