"use client";

import { useEffect } from "react";

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
            <button onClick={() => reset()}>Попробовать снова</button>
        </div>
    );
}
