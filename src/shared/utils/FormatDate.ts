const LOCALE = "uk-UA";

export function formatDateTime(iso: string): string {
    return new Date(iso).toLocaleString(LOCALE);
}