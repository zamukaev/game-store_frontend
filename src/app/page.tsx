"use client";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

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
import UserInput from "@/components/ui/userInput/UserInput";
import ProductCard from "@/components/ui/productCard/ProductCard";
import ProductType from "@/components/ui/productType/ProductType";

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

    const mockProduct = {
        title: "Apple MacBook Pro 14 (M3 10C CPU, 8C GPU, 2023) 8 ГБ, 512 ГБ SSD, «серый космос»",
        desc: "This is a fake product description",
        characteristic: "Fake characteristic",
        category: "Fake Category",
        price: 120000,
        oldPrice: 130000,
        hit: true,
        inStock: false,
        discount: true,
        urlImages: [
            // eslint-disable-next-line max-len
            "https://c.dns-shop.ru/thumb/st1/fit/500/500/b0d0d7cf9ef6a88765bbffa11e8a2a65/bc1311aa320af2e639161b8f6b03f01d7f1d915c9186421f8472626fcad1195a.jpg",
        ],
        reviews: ["Good product!", "Not worth the price."],
    };

    return (
        <main className="main">
            <NavItem kind="cart" text="Корзина" href="/cart" />
            <NavItem kind="login" text="Войти" />
            <NavItem kind="favorites" text="Избранное" href="/favorites" />
            <Button kind="cart">
                <CartIcon />
                <p>Перейти на главную</p>
            </Button>
            <Button kind="gray">
                <p>Выйти из аккаутна</p>
            </Button>
            <ProductCard product={mockProduct} />
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
            {/* <Range /> */}
            <UserInput kind="password" />
            <UserInput kind="number" />
            <UserInput kind="username" />
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
