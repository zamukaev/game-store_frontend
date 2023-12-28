"use client";

import { useState } from "react";

import Button from "@/components/ui/button/Button";
import InputPrice from "@/components/ui/inputPrice/InputPrice";

export default function Home() {
    const [price, setPrice] = useState<number>(0);

    console.log(price);

    return (
        <main className="main">
            {/* <Button kind="gray">Перейти на главную</Button> */}
            <InputPrice
                placeholder="от 199"
                value={price}
                setValue={setPrice}
            />
        </main>
    );
}
