"use client";
import { useState } from "react";

import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import Button from "@/components/ui/button/Button";
import { NavItem } from "@/components/ui/navItem/NavItem";
import InputPrice from "@/components/ui/inputPrice/InputPrice";
import Rating from "@/components/ui/rating/Rating";
import Counter from "@/components/ui/counter/Counter";
import RadioGroup from "@/components/ui/radioGroup/RadioGroup";
import Range from "@/components/ui/range/Range";
import Card from "@/components/ui/card/Card";
import Switcher from "@/components/ui/switcher/Switcher";
import Notification, {
    NotificationTheme,
} from "@/components/ui/notification/Notification";
import AppLink, { AppLinkTheme } from "@/components/ui/appLink/AppLink";
import EmailIcon from "@/components/shared/icons/email/EmailIcon";

import InstagramIcon from "@/components/shared/icons/instagram/InstagramIcon";
import TelefonIcon from "@/components/shared/icons/telefon/TelefonIcon";
import LinkItem, { Kind } from "@/components/ui/linkItem/LinkItem";

export default function Home() {
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false);
    const [visible, setVisible] = useState(true);

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
            <Card />
            <Switcher
                isToggled={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
            />
            <Range />
            <Notification visible={visible} setVisible={setVisible}>
                Вход прошел успешно!
            </Notification>
            <Notification
                visible={visible}
                setVisible={setVisible}
                theme={NotificationTheme.FAILED}
            >
                Произошла ошибка с сервером!
            </Notification>
            <LinkItem
                url="tel:+7 (391) 205-09-77"
                kind={Kind.TELEFON}
                text="+7 (391) 205-09-77"
            />
            <LinkItem
                url="http://instagram"
                kind={Kind.INSTAGRAM}
                text="Instagram"
            />
            <LinkItem
                url="mailto:emailname@mail.com"
                kind={Kind.EMAIL}
                text="emailname@mail.com"
            />
            <LinkItem
                url="+7(391)205-09-77"
                kind={Kind.WHATSAPP}
                text="WhatsApp"
            />
        </main>
    );
}
