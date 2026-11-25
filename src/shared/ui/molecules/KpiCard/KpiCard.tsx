import { Card } from "../Card/Card";

export function KpiCard({
                            title,
                            value,
                            note,
                            tone = "normal",
                        }: {
    title: string;
    value: string;
    note?: string;
    tone?: "normal" | "accent";
}) {
    return (
        <Card compact>
            <div className={`ds-kpi ds-kpi--${tone}`}>
                <span className="ds-muted">{title}</span>
                <strong>{value}</strong>
                {note && <span className="ds-muted">{note}</span>}
            </div>
        </Card>
    );
}