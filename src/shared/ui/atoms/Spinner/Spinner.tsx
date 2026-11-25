export function Spinner({
                            label = "Завантаження…",
                            size = "md",
                        }: {
    label?: string;
    size?: "sm" | "md";
}) {
    return (
        <span role="status" className={`ds-spinner ds-spinner--${size}`}>
            {label}
        </span>
    );
}