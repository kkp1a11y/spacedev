import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import { Select } from "../../../../shared/ui/atoms/Select/Select.tsx";
import {Field} from "../../../../shared/ui/molecules/Field/Field.tsx";

export default function AgencyFilter({ agencies }: { agencies: string[] }) {
    const agency = useAppStore((s) => s.agency);
    const setAgency = useAppStore((s) => s.setAgency);

    const values =
        agency && !agencies.includes(agency)
            ? [agency, ...agencies]
            : agencies;

    return (
        <Field label="Агенція">
            <Select
                value={agency}
                onChange={(event) => setAgency(event.target.value)}
                options={[
                    { value: "", label: "Усі агенції" },
                    ...values.map((value) => ({
                        value,
                        label: value,
                    })),
                ]}
            />
        </Field>
    );
}