"use client";

import React, { FC } from "react";

import { Kind, LinkItem } from "@/shared/ui";

import styles from "./style.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__nav}>
                <div className={styles.footer__nav_items}>
                    <h1 className={styles.title}>Контакты</h1>
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

                    <div className={styles.depart}>
                        <p>Номер для госзаказов</p>
                        <LinkItem
                            kind={Kind.PHONE}
                            url="tel:+7 (391) 205-09-77"
                        >
                            +7 (391) 205-09-77
                        </LinkItem>
                    </div>
                </div>
                <div className={styles.footer__nav_items}>
                    <h1 className={styles.title}>Навигация</h1>
                    <p>Все категории</p>
                    <p>Акции</p>
                    <p>Хиты</p>
                </div>
                <div className={styles.footer__nav_items}>
                    <h1 className={styles.title}>Помощь и поддержка</h1>
                    <p>Способы оплаты</p>
                    <p>Доставка</p>
                </div>
            </div>
            <div className={styles.footer__links}>
                <LinkItem kind={Kind.WHATSAPP} url="https://wa.me/79785508821">
                    WhatsApp
                </LinkItem>
                <LinkItem
                    kind={Kind.INSTAGRAM}
                    url="https://www.instagram.com/"
                >
                    Instagram
                </LinkItem>
                <LinkItem kind={Kind.EMAIL} url="mailto:test@mail.ru">
                    emailname@mail.com
                </LinkItem>
            </div>
        </footer>
    );
};

export default Footer;
