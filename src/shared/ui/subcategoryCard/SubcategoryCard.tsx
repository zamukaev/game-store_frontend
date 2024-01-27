import { FC } from "react";
import Image from "next/image";

import { Headline, HeadlineSize } from "..";

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
        <li className={cls}>
            <div className={styles.image}>
                <Image src={CartImage} alt={alt} width={150} height={150} />
            </div>
            <Headline Size={HeadlineSize.S} className={styles.text}>
                {text}
            </Headline>
        </li>
    );
};

export default SubcategoryCard;
