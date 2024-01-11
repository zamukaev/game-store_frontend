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
import LinkItem, { Kind } from "@/components/ui/linkItem/LinkItem";
import SearchInput from "@/components/ui/searchInput/SearchInput";
import ReviewInput from "@/components/ui/reviewInput/ReviewInput";

import ProductType, {
    ProductTypeTheme,
} from "@/components/ui/productType/ProductType";
import Scores from "@/components/ui/scores/Scores";

export default function Home() {
    const [price, setPrice] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [isToggled, setIsToggled] = useState(false);
    const [visible, setVisible] = useState(true);

    const onSearch = (query: string) => {
        console.log(query);
    };

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
            <Scores rating={4} />
            <Sorting />
            <ProductType theme={ProductTypeTheme.HIT}>Hit</ProductType>
            <ProductType theme={ProductTypeTheme.PROMOTION}>
                Promotion
            </ProductType>
            {/* <Range /> */}
            <SearchInput onSearch={onSearch} placeholder="Поиск товара" />
            <ReviewInput
                label="Достоинства"
                placeholder="Что вам понравилось"
            />
            <ReviewInput label="Недостатки" placeholder="Что не понравилось" />
            <ReviewInput label="Комментарий" placeholder="Другие впечатления" />
        </main>
    );
}
