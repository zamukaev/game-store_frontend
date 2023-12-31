"use client";
import { useState } from "react";
import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import Button from "@/components/ui/button/Button";
import { NavItem } from "@/components/ui/navItem/NavItem";
import InputPrice from "@/components/ui/inputPrice/InputPrice";

export default function Home() {
const [price, setPrice] = useState<number>(0);

    return (
        <main className="main">
            <NavItem kind="cart" text="basket" href="/cart" />
            <NavItem kind="login" text="login" onClick={() => console.log("modal true")} />
            <NavItem kind="favorites" text="favorites" href="/favorites" />
            <Button kind="gray">Перейти на главную</Button>
            <Button kind="cart">
                <CartIcon />
                <p>Перейти на главную</p>
            </Button>
                <InputPrice
                placeholder="от 199"
                value={price}
                setValue={setPrice}
            />
        </main>
    );
}
