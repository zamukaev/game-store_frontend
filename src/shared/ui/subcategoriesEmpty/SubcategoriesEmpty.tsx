import { FC, ReactNode } from "react";

import { AppLink, Headline, HeadlineSize } from "@/shared/ui";
import { AppLinkTheme } from "@/shared/ui/appLink/AppLink";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

interface SubcategoriesEmptyProps {
    className?: string;
    content?: ReactNode;
}

const SubcategoriesEmpty: FC<SubcategoriesEmptyProps> = ({
    className,
    content,
    ...props
}) => {
    const cls = `${styles.empty} ${className}`;

    return (
        <div className={cls} {...props}>
            <SearchIcon fill="#FF6B00" height={50} width={50} />
            <Headline className={styles.subtitle} Size={HeadlineSize.M}>
                {content}
            </Headline>
            <AppLink href="/" theme={AppLinkTheme.OUTLINE}>
                Перейти на главную
            </AppLink>
        </div>
    );
};

export default SubcategoriesEmpty;
