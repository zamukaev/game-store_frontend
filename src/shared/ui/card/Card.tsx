import { FC } from "react";

import Button from "@/shared/ui/button/Button";
import CartIcon from "@/shared/icons/cartIcon/CartIcon";

import CloseIcon from "@/shared/icons/closeIcon/CloseIcon";

import ButtonLoader from "../buttonLoader/ButtonLoader";

import styles from "./styles.module.scss";

interface Props {
    className?: string;
    isLoadingBtn?: boolean;
    isProductAddedToCart?: boolean;
    onClick?: () => void;
}

const Card: FC<Props> = (props) => {
    const {
        className = "",
        onClick,
        isLoadingBtn,
        isProductAddedToCart,
    } = props;

    const cls = `${styles.card} ${className}`;

    const clickHandle = () => {
        if (onClick) {
            onClick();
        }
    };
    console.log(isProductAddedToCart);
    return (
        <>
            {isLoadingBtn ? (
                <ButtonLoader />
            ) : (
                <Button
                    data-testid="card"
                    className={cls}
                    onClick={clickHandle}
                    kind="card"
                >
                    {isProductAddedToCart ? (
                        <CloseIcon width={15} height={15} fill="#ff8b37" />
                    ) : (
                        <CartIcon />
                    )}
                </Button>
            )}
        </>
    );
};

export default Card;
