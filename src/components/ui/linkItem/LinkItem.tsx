import { FC } from "react";

import InstagramIcon from "@/components/shared/icons/instagram/InstagramIcon";
import TelefonIcon from "@/components/shared/icons/telefon/TelefonIcon";
import EmailIcon from "@/components/shared/icons/email/EmailIcon";
import WhatsAppIcon from "@/components/shared/icons/whatsApp/WhatsAppIcon";
import AppLink from "@/components/ui/appLink/AppLink";

import styles from "./styles.module.scss";

export enum Kind {
    INSTAGRAM = "instagram",
    TELEFON = "telefon",
    EMAIL = "email",
    WHATSAPP = "whatsapp",
}
interface LinkItemProps {
    classNames?: string;
    url?: string;
    text?: string;
    kind?: Kind;
}

const LinkItem: FC<LinkItemProps> = (props) => {
    const { classNames, text, url = "", kind = "" } = props;
    const cls = `${styles.linkItem} ${styles[kind]} ${classNames}`;

    const getIcon = () => {
        switch (kind) {
        case "instagram":
            return <InstagramIcon stroke="black" />;
        case "telefon":
            return <TelefonIcon stroke="black" />;
        case "email":
            return <EmailIcon fill="black" />;
        case "whatsapp":
            return <WhatsAppIcon stroke="black" />;
        default:
            null;
        }
    };

    return (
        <AppLink data-testid="linkItem" className={cls} href={url}>
            {getIcon()}
            <p>{text}</p>
        </AppLink>
    );
};

export default LinkItem;
