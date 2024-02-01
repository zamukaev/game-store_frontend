import { FC } from "react";

import { AppLink, Headline, HeadlineSize } from "@/shared/ui";
import { AppLinkTheme } from "@/shared/ui/appLink/AppLink";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

const SubcategoriesEmpty: FC = ({ ...props }) => {
    const cls = `${styles.empty}`;

    return (
        <div className={cls} {...props}>
            <SearchIcon fill="#FF6B00" height={50} width={50} />
            <Headline className={styles.subtitle} Size={HeadlineSize.M}>
                Нам не удалось найти то, что вы искали
            </Headline>
            <AppLink href="/" theme={AppLinkTheme.OUTLINE}>
                Перейти на главную
            </AppLink>
        </div>
    );
};

export default SubcategoriesEmpty;
