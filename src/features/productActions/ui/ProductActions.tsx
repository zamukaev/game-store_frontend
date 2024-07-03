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
    Modal,
    Scores,
} from "@/shared/ui";
import AviableIcon from "@/shared/icons/aviableIcon/AviableIcon";
import { Product as ProductType } from "@/shared/types/product";

import { getProduct, getProductScore } from "@/widgets/product/api";

import { formatPrice } from "@/utils/numbers/formatPrice";
import localStorageApi from "@/utils/data/localStorageApi";

import LeaveFeedback from "@/shared/ui/LeaveFeedback/LeaveFeedback";
import ThanksForRating from "@/shared/ui/thanksForRating/ThanksForRating";
import { SecondFeedback } from "@/shared/ui/secondFeedback/SecondFeedback";
import { ThanksForFeedback } from "@/shared/ui/ThanksForFeedback/ThanksForFeedback";

import useRatingStore from "../model/rating-store";

import styles from "./ProductActions.module.scss";

interface ProductActionsProps {
    id: string;
    price: number;
}

const ProductActions: FC<ProductActionsProps> = ({ id, price }) => {
    const { currentStage, setCurrentStage, setRating } = useRatingStore();

    const [isProductAddedToCart, setIsProductAddedToCart] = useState<
        boolean | undefined
    >(false);
    const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const cartIds = localStorageApi.getDataFromLocalSt("cart");

    const determineRankingStage = () => {
        switch (currentStage) {
        case 1:
            return <LeaveFeedback />;
        case 2:
            return <ThanksForRating />;
        case 3:
            return <SecondFeedback />;
        case 4:
            return <ThanksForFeedback />;
        default:
            return null;
        }
    };

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

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [cartIds, id]);

    useEffect(() => {
        if (!isOpen) {
            setCurrentStage(1);
            setRating(0);
        }
    }, [isOpen]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (currentStage === 4) {
            timer = setTimeout(() => {
                setIsOpen(false);
            }, 2000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [currentStage]);

    return (
        <div className={styles.content}>
            <div className={styles.content__info}>
                <div className={styles.content__rating}>
                    <p>{score}</p>
                    <Scores isEditable={false} rating={2} />
                    <p className={styles.content__info_scoreCount}>(45)</p>
                    <p
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.content__info_addReview}
                    >
                        Оставить отзыв
                    </p>

                    <Modal className={styles.modal} isOpen={isOpen}>
                        {determineRankingStage()}
                    </Modal>
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
