import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import { AppLink, Headline, HeadlineSize } from "@/shared/ui";
import { AppLinkTheme } from "@/shared/ui/appLink/AppLink";

import styles from "./styles.module.scss";

const CartEmpty = ({ className }: { className: string }) => {
    const cls = `${styles.empty} ${className}`;
    return (
        <div className={cls}>
            <FavoritesIcon className={styles.icon} fill="#FF6B00" />
            <Headline className={styles.title} Size={HeadlineSize.M}>
                Вы пока не добавляли товары в избранное
            </Headline>
            <AppLink theme={AppLinkTheme.OUTLINE} href="/">
                Перейти на главную
            </AppLink>
        </div>
    );
};

export default CartEmpty;
