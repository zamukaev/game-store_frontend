import { FC } from "react";
import Image from "next/image";

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
                <Image src={CartImage} alt={alt} width={130} height={130} />
            </div>
            <p className={styles.text}>{text}</p>
        </li>
    );
};

export default SubcategoryCard;
