import { AppLink, Headline, HeadlineSize, AppLinkTheme } from "@/shared/ui";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import styles from "./styles.module.scss";

const CartEmpty = ({ className }: { className: string }) => {
    const cls = `${styles.empty} ${className}`;

    return (
        <div className={cls}>
            <FavoritesIcon width={30} height={30} className={styles.icon} fill="#FF6B00" />
            <Headline className={styles.title} Size={HeadlineSize.M}>
                Вы пока не добавляли товары в избранное
            </Headline>
            <AppLink className={styles.back_btn} theme={AppLinkTheme.OUTLINE} href="/">
                Перейти на главную
            </AppLink>
        </div>
    );
};

export default CartEmpty;
