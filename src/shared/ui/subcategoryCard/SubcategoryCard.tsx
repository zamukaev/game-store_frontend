import { FC } from "react";
import Image from "next/image";

import { AppLink, Headline, HeadlineSize } from "..";

import { AppLinkTheme } from "../appLink/AppLink";

import CartImage from "./image/1.png";

import styles from "./styles.module.scss";

interface CategoryCardProps {
    image: string;
    text: string;
    alt: string;
}

const SubcategoryCard: FC<CategoryCardProps> = (props) => {
    const { image, text, alt } = props;
    const cls = `${styles.row}`;

    return (
        <AppLink href="/" theme={AppLinkTheme.NAVITEM} className={cls}>
            <div className={styles.image}>
                <Image src={CartImage} alt={alt} width={150} height={150} />
            </div>
            <Headline Size={HeadlineSize.S} className={styles.text}>
                {text}
            </Headline>
        </AppLink>
    );
};

export default SubcategoryCard;
