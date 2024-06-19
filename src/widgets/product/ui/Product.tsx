"use client";

import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Product as ProductType } from "@/shared/types/product";
import ArrowPrevIcon from "@/shared/icons/arrowPrevIcon/arrowPrevIcon";
import { CharacteristicItem, Headline, HeadlineSize } from "@/shared/ui";
import ProductImages from "@/shared/ui/productImages/ProductImages";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";
import ProductReviewItem from "@/shared/ui/productReviewItem/ProductReviewItem";
import ProductLoader from "./Product.loader";

import useFavoritesStore from "@/widgets/favorites/model/favorites-store";

import { ProductActions } from "@/features/productActions";

import { getProduct } from "../api";

import styles from "./Product.module.scss";

interface ProductProps {
    id: string;
}

const Product: FC<ProductProps> = ({ id }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    const router = useRouter();

    const { data: product } = useQuery<ProductType | undefined>({
        queryKey: ["product"],
        queryFn: () => getProduct(id),
    });

    const goBackHandler = () => {
        router.back();
    };

    const toggleFavoriteHandler = () => {
        if (product) {
            toggleFavorite(product._id);
        }
    };

    const characteristics = [
        {
            title: "Заводские данные",
            childrens: [
                {
                    label: "Гарантия продавца / производителя",
                    value: "36 мес.",
                },
            ],
        },
        {
            title: "Общие параметры",
            childrens: [
                {
                    label: "Тип",
                    value: "Материнская плата",
                },
                {
                    label: "Модель",
                    value: "MSI MAG Z690 TOMAHAWK WIFI",
                },
            ],
        },
    ];

    const reviews = [
        {
            user: "Юрий Трифанов",
            rating: 4,
            date: "13 декабря 2023 г.",
            advantages: "Отлично работает",
            disadvantages: "Не обнаружил",
            comment:
                "Топовая мамка которую я нашел в своем магазине на ddr5, MSI как всегда радуют своими дизайнерскими ходами, куча слотов под накопители М2, хорошее охлаждение. В комплекте идет фирменная фшлека MSI 16gb с драйверами на мат плату. Товаром доволен, дальше будем смотреть.",
        },
        {
            user: "Юрий Трифанов",
            rating: 5,
            date: "12 декабря 2023 г.",
            advantages: "Отлично работает и все ок!",
            disadvantages: "Нету",
            comment:
                "В комплекте идет фирменная фшлека MSI 16gb с драйверами на мат плату. Товаром доволен, дальше будем смотреть.",
        },
    ];

    useEffect(() => {
        if (product) {
            setIsFavorite(favorites.includes(product._id));
        }
    }, [favorites, product?._id]);

    return (
        <div className={styles.container}>
            {product ? (
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div
                            className={styles.header__back}
                            onClick={goBackHandler}
                        >
                            <ArrowPrevIcon />
                        </div>
                        <Headline Size={HeadlineSize.L}>
                            {product.title}
                        </Headline>
                        <FavoritesIcon
                            onClick={toggleFavoriteHandler}
                            fill={isFavorite ? "var(--color-orange)" : "black"}
                            width={28}
                            height={28}
                            className={styles.header__favorite}
                        />
                    </div>
                    <div className={styles.content}>
                        <ProductImages images={product.urlImages} />
                        <ProductActions id={id} price={product.price} />
                    </div>
                    <div className={styles.desc}>
                        <Headline Size={HeadlineSize.L}>Описание</Headline>
                        <p>
                            Материнская плата MSI MAG Z690 TOMAHAWK WIFI
                            обладает свойствами надежной платформы для создания
                            мощного ПК для профессиональной деятельности и игр.
                            Она относится к решениям полноразмерного формата и
                            основана на чипсете Intel Z690. В оснащение платы
                            входят четыре слота для установки планок ОЗУ
                            стандарта DDR5, слоты PCI-E x16 версии 5.0, разъемы
                            M.2 и SATA для подключения устройств хранения
                            информации. Плата выделяется расширенными
                            коммуникационными возможностями, среди которых
                            отмечаются сетевой контроллер 2.5 Гбит/с, модули
                            Wi-Fi и Bluetooth. Система питания 18 фаз и надежные
                            компоненты гарантируют стабильность функционирования
                            MSI MAG Z690 TOMAHAWK.
                        </p>
                    </div>
                    <div className={styles.characteristic}>
                        <Headline
                            Size={HeadlineSize.L}
                            className={styles.characteristic__title}
                        >
                            Характеристики
                        </Headline>
                        <div className={styles.characteristic__items}>
                            {characteristics.map((item) => (
                                <CharacteristicItem
                                    key={item.title}
                                    title={item.title}
                                    childrens={item.childrens}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.reviews}>
                        <Headline
                            Size={HeadlineSize.L}
                            className={styles.reviews__title}
                        >
                            3 отзыва
                        </Headline>
                        <div className={styles.reviews__items}>
                            {reviews.map((review) => (
                                <ProductReviewItem
                                    review={review}
                                    key={review.advantages}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <ProductLoader />
            )}
        </div>
    );
};

export default Product;
