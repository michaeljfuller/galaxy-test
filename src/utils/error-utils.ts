/** Return a string from an unknown type */
export function errorMessage(error: unknown, fallback = "An error occurred"): string {
    if (error) {
        if (error instanceof Error) {
            return error.message || error.name;
        }
        if (typeof error === "string") {
            return error;
        }
    }
    return fallback;
}