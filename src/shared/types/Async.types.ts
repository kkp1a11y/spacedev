export type AsyncStatus = "loading" | "success" | "error";

export interface AsyncState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}