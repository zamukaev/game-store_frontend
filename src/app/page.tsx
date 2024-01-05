"use client";
import { useState } from "react";

import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import Button from "@/components/ui/button/Button";
import { NavItem } from "@/components/ui/navItem/NavItem";
import InputPrice from "@/components/ui/inputPrice/InputPrice";
import Rating from "@/components/ui/rating/Rating";
import Counter from "@/components/ui/counter/Counter";
import RadioButton from "@/components/ui/radioButton/RadioButton";
import RadioGroup from "@/components/ui/radioGroup/RadioGroup";
import Range from "@/components/ui/range/Range";

export default function Home() {
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState(0);

    return (
        <main className="main">
            <NavItem kind="cart" text="Корзина" href="/cart" />
            <NavItem
                kind="login"
                text="Войти"
                onClick={() => console.log("modal true")}
            />
            <NavItem kind="favorites" text="Избранное" href="/favorites" />
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

            <Counter initialCount={count} />
            <RadioGroup />
            <Range />
        </main>
    );
}
