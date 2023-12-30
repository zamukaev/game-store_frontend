"use client";
import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import Button from "@/components/ui/button/Button";
import { NavItem } from "@/components/ui/navItem/NavItem";

export default function Home() {


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
        </main>
    );
}
