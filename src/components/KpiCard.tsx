interface KpiCardProps {
    title: string;
    value: string;
    change?: string;
    note?: string;
}

export default function KpiCard({ title, value, change, note }: KpiCardProps) {
    return (
        <div className="card">
            <p className="card-title">{title}</p>
            <h2>{value}</h2>
            {change && <span className="card-change">{change}</span>}
            {note && <span className="card-note">{note}</span>}
        </div>
    );
}