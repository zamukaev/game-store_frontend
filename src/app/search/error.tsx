"use client";

import { Button } from "@/shared/ui";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h2>Произошла ошибка!</h2>
            <p>{error.message}</p>
            <Button onClick={() => reset()}>Попробовать снова</Button>
        </div>
    );
}
