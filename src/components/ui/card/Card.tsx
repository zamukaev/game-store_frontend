import { FC } from "react";

import Button from "@/components/ui/button/Button";
import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";

import styles from "./styles.module.scss";


interface Props {
    className?: string;
    onClick?: () => void;
}

const Card: FC<Props> = (props) => {
    const {
        className = "",
        onClick
    } = props;

    const cls = `${styles.card} ${className}`;

    const clickHandle = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Button data-testid="card" className={cls} onClick={clickHandle} kind="card">
            <CartIcon />
        </Button>

    );
};

export default Card;