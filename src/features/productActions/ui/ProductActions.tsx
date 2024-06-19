import React, {
    FC,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { useQuery } from "@tanstack/react-query";

import CartIcon from "@/shared/icons/cartIcon/CartIcon";
import {
    Button,
    ButtonLoader,
    Headline,
    HeadlineSize,
    Scores,
} from "@/shared/ui";
import AviableIcon from "@/shared/icons/aviableIcon/AviableIcon";

import { getProductScore } from "@/widgets/product/api";

import { formatPrice } from "@/utils/numbers/formatPrice";
import localStorageApi from "@/utils/data/localStorageApi";

import styles from "./ProductActions.module.scss";

interface ProductActionsProps {
    id: string;
    price: number;
}

const ProductActions: FC<ProductActionsProps> = ({ id, price }) => {
    const [isProductAddedToCart, setIsProductAddedToCart] = useState<
        boolean | undefined
    >(false);
    const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

    const cartIds = localStorageApi.getDataFromLocalSt("cart");

    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const { data: score } = useQuery<number | undefined>({
        queryKey: ["productScore"],
        queryFn: () => getProductScore(id),
    });

    const toggleCartHandler = () => {
        if (isProductAddedToCart) {
            setIsLoadingBtn(true);
            timerRef.current = setTimeout(() => {
                setIsLoadingBtn(false);
            }, 300);
            localStorageApi.removeDataFromLocalSt("cart", id);
            setIsProductAddedToCart(false);
        } else {
            setIsLoadingBtn(true);
            timerRef.current = setTimeout(() => {
                setIsLoadingBtn(false);
            }, 300);
            localStorageApi.setItemToLocalSt(id, "cart");
            setIsProductAddedToCart(true);
        }
    };

    useEffect(() => {
        setIsProductAddedToCart(cartIds?.includes(id));
    }, [cartIds, id]);

    return (
        <div className={styles.content}>
            <div className={styles.content__info}>
                <div className={styles.content__rating}>
                    <p>{score}</p>
                    <Scores isEditable={false} rating={2} />
                    <p className={styles.content__info_scoreCount}>(45)</p>
                    <p className={styles.content__info_addReview}>
                        Оставить отзыв
                    </p>
                </div>
                <div className={styles.content__price}>
                    <Headline Size={HeadlineSize.L}>
                        {formatPrice(price)}
                    </Headline>
                    <div className={styles.content__price_aviable}>
                        <AviableIcon />
                        <p>В наличии: 13 шт.</p>
                    </div>
                </div>
                <Button kind="cart" onClick={toggleCartHandler}>
                    {isLoadingBtn ? (
                        <ButtonLoader />
                    ) : (
                        <>
                            {isProductAddedToCart ? (
                                <>
                                    <CartIcon />
                                    <p>Удалить из корзины</p>
                                </>
                            ) : (
                                <>
                                    <CartIcon />
                                    <p>Добавить в корзину</p>
                                </>
                            )}
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ProductActions;
