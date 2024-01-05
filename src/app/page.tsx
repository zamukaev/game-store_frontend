"use client";
import { useState } from "react";

import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import Button from "@/components/ui/button/Button";
import { NavItem } from "@/components/ui/navItem/NavItem";
import InputPrice from "@/components/ui/inputPrice/InputPrice";
import Rating from "@/components/ui/rating/Rating";
import Counter from "@/components/ui/counter/Counter";
import RadioGroup from "@/components/ui/radioGroup/RadioGroup";
import Card from "@/components/ui/card/Card";
import Switcher from "@/components/ui/switcher/Switcher";

export default function Home() {
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false);

    return (
        <main className="main">
            <NavItem kind="cart" text="basket" href="/cart" />
            <NavItem
                kind="login"
                text="login"
                onClick={() => console.log("modal true")}
            />
            <NavItem kind="favorites" text="favorites" href="/favorites" />
            <Button kind="cart">
                <CartIcon />
                <p>Перейти на главную</p>
            </Button>
            <Button kind="gray">
                <p>Выйти из аккаутна</p>
            </Button>
            <InputPrice
                placeholder="от 199"
                value={price}
                setValue={setPrice}
            />
            <Rating rating={rating} setRating={setRating} isEditable={true} />

            <Counter count={count} setCount={setCount} />
            <RadioGroup />
            <Card />
            <Switcher
                isToggled={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
            />
            <SliderRange />
        </main>
    );
}
