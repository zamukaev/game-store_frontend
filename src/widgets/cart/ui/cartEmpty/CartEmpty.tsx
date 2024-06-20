import { AppLink, Headline, HeadlineSize, AppLinkTheme } from "@/shared/ui";
import CartIcon from "@/shared/icons/cartIcon/CartIcon";

import styles from "./styles.module.scss";

const CartEmpty = ({ className }: { className: string }) => {
    const cls = `${styles.empty} ${className}`;

    return (
        <div className={cls}>
            <CartIcon
                width={35}
                height={35}
                className={styles.icon}
                fill="#FF6B00"
            />
            <Headline className={styles.title} Size={HeadlineSize.M}>
                Вы пока не добавляли товары в корзину
            </Headline>
            <AppLink
                className={styles.back_btn}
                theme={AppLinkTheme.OUTLINE}
                href="/"
            >
                Перейти на главную
            </AppLink>
        </div>
    );
};

export default CartEmpty;
