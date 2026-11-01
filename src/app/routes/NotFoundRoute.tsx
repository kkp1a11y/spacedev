import { Link } from "react-router";

export default function NotFoundRoute() {
    return (
        <section className="section">
            <h3>Сторінку не знайдено</h3>
            <Link to="/" className="button">На головну</Link>
        </section>
    );
}