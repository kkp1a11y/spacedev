import "./KpiCard.css";

interface KpiCardProps {
    title: string;
    value: string;
    change?: string;
    note?: string;
}

export default function KpiCard({ title, value, change, note }: KpiCardProps) {
    return (
        <div className="kpi-card">
            <p className="kpi-card__title">{title}</p>
            <h2 className="kpi-card__value">{value}</h2>
            {change && <span className="kpi-card__change">{change}</span>}
            {note && <span className="kpi-card__note">{note}</span>}
        </div>
    );
}