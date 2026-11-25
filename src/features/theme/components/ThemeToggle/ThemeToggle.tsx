import { useAppStore } from "../../../../app/store/UseAppStore.ts";
import { Input } from "../../../../shared/ui/atoms/Input/Input.tsx";
import { Field } from "../../../../shared/ui/molecules/Field/Field.tsx";

export default function ThemeToggle() {
    const isDark = useAppStore((s) => s.isDark);
    const setIsDark = useAppStore((s) => s.setIsDark);

    return (
        <Field inline label={isDark ? "Темна тема" : "Світла тема"}>
            <Input
                type="checkbox"
                checked={isDark}
                onChange={(event) => setIsDark(event.target.checked)}
            />
        </Field>
    );
}