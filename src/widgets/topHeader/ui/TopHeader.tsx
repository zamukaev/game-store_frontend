import React from "react";

import { Kind, LinkItem } from "@/shared/ui";

import styles from "./style.module.scss";

const TopHeader = () => {
    return (
        <div className={styles.container}>
            <LinkItem
                kind={Kind.ADDRESS}
                // eslint-disable-next-line max-len
                url="https://yandex.ru/maps/39/rostov-na-donu/?ll=39.699940%2C47.222233&mode=poi&poi%5Bpoint%5D=39.695898%2C47.223183&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D55026050053&z=17.26"
            >
                Красноярск ул. 9 мая 77 ТРЦ «Планета»
            </LinkItem>
            <LinkItem kind={Kind.PHONE} url="tel:+7 (391) 205-09-77">
                +7 (391) 205-09-77
            </LinkItem>
        </div>
    );
};

export default TopHeader;
