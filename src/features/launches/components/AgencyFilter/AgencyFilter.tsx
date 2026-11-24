import Select from "../../../../shared/components/ui/Select/Select.tsx";
import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import "./AgencyFilter.css";

export default function AgencyFilter({ agencies }: { agencies: string[] }) {
    const agency = useAppStore((state) => state.agency);
    const setAgency = useAppStore((state) => state.setAgency);

    const values =
        agency && !agencies.includes(agency)
            ? [agency, ...agencies]
            : agencies;

    return (
        <div className="agency-filter">
            <Select
                label="Агенція"
                allLabel="Усі агенції"
                value={agency}
                options={values.map((value) => ({
                    value,
                    label: value,
                }))}
                onChange={setAgency}
            />
        </div>
    );
}