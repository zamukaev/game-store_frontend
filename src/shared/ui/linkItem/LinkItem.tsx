import { FC, ReactNode } from "react";

import InstagramIcon from "@/shared/icons/instagram/InstagramIcon";
import PhoneIcon from "@/shared/icons/phone/PhoneIcon";
import EmailIcon from "@/shared/icons/email/EmailIcon";
import WhatsAppIcon from "@/shared/icons/whatsApp/WhatsAppIcon";
import AppLink from "@/shared/ui/appLink/AppLink";
import AddressIcon from "@/shared/icons/addressIcon/AddressIcon";

import styles from "./styles.module.scss";

export enum Kind {
    INSTAGRAM = "instagram",
    PHONE = "phone",
    EMAIL = "email",
    WHATSAPP = "whatsapp",
    ADDRESS = "address",
}
interface LinkItemProps {
    classNames?: string;
    url?: string;
    children?: ReactNode;
    kind?: Kind;
}

const LinkItem: FC<LinkItemProps> = (props) => {
    const { classNames, children, url = "", kind = "" } = props;
    const cls = `${styles.linkItem} ${styles[kind]} ${classNames}`;

    const getIcon = () => {
        switch (kind) {
        case "instagram":
            return <InstagramIcon stroke="black" />;
        case "phone":
            return <PhoneIcon stroke="black" />;
        case "email":
            return <EmailIcon fill="black" />;
        case "whatsapp":
            return <WhatsAppIcon stroke="black" />;
        case "address":
            return <AddressIcon stroke="black" />;
        default:
            null;
        }
    };

    return (
        <AppLink data-testid="linkItem" className={cls} href={url}>
            {getIcon()}
            <p>{children}</p>
        </AppLink>
    );
};

export default LinkItem;
