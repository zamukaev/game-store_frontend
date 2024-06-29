"use client";

import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";

import { Tooltip } from "react-tooltip";

import HelpIcon from "@/shared/icons/helpIcon/HelpIcon";
import EyeOpenIcon from "@/shared/icons/eyeOpen/EyeOpen";
import EyeClosedIcon from "@/shared/icons/eyeClosed/EyeClosed";
import EditIcon from "@/shared/icons/editIcon/EditIcon";

import feedbackStore from "../secondFeedback/model/feedback-store";

import styles from "./styles.module.scss";

interface UserInputProps {
    kind:
        | "number"
        | "password"
        | "username"
        | "virtues"
        | "defects"
        | "commentary";
    value: string;
    onChange: (value: string) => void;
}

// убрать, когда появится стор
const username = "Dmitry";

const UserInput: FC<UserInputProps> = ({ kind, value, onChange }) => {
    const [searchQuery, setSearchQuery] = useState<string>(
        kind === "username" && username ? username : ""
    );
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [openedEye, setOpenedEye] = useState<boolean>(false);
    const [disabledEdit, setDisabledEdit] = useState<boolean>(true);

    const { feedback } = feedbackStore();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSearchQuery(newValue);
        onChange(newValue);
    };

    const toggleEye = () => {
        setOpenedEye(!openedEye);
    };

    const getIcon = () => {
        switch (kind) {
            case "number":
                return (
                    <HelpIcon
                        data-tooltip-id="help"
                        data-tooltip-content="Телефон в формате: 7 000 000 00 00"
                        data-tooltip-place="top"
                    />
                );
            case "password":
                if (openedEye) {
                    return <EyeOpenIcon onClick={toggleEye} />;
                } else {
                    return <EyeClosedIcon onClick={toggleEye} />;
                }
            case "username":
                return (
                    <EditIcon
                        onClick={() => setDisabledEdit(false)}
                        data-tooltip-id="username"
                        data-tooltip-content="Изменить имя"
                        data-tooltip-place="top"
                    />
                );
            default:
                null;
        }
    };

    const returnLabel = () => {
        switch (kind) {
            case "number":
                return "Телефон";
            case "password":
                return "Пароль";
            case "username":
                return "Имя";
            case "virtues":
                return "Достоинства";
            case "defects":
                return "Недостатки";
            case "commentary":
                return "Комментарий";
            default:
                null;
        }
    };

    const returnInputType = () => {
        switch (kind) {
            case "number":
                return "tel";
            case "password":
                if (openedEye) {
                    return "text";
                } else {
                    return "password";
                }
            case "username":
                return "text";
            default:
                null;
        }
    };

    useEffect(() => {
        setIsFilled(!!searchQuery);
    }, [searchQuery]);

    return (
        <div>
            <Tooltip id="help" className={styles.tooltip} />
            <Tooltip id="username" className={styles.tooltip} />
            <label className={styles.label}>{returnLabel()}</label>
            <form className={styles.form}>
                {kind === "number" ? (
                    <PatternFormat
                        value={searchQuery}
                        onChange={handleInputChange}
                        className={styles.input}
                        format="+7 ### ### ## ##"
                        allowEmptyFormatting
                    />
                ) : (
                    <input
                        type={returnInputType()}
                        value={searchQuery}
                        onChange={handleInputChange}
                        data-testid="userInput"
                        className={styles.input}
                        disabled={kind === "username" && disabledEdit}
                    />
                )}
                <div className={styles.icon}>{getIcon()}</div>
            </form>
        </div>
    );
};

export default UserInput;
