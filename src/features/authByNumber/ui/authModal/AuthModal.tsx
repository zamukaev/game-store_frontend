import { FC, memo, useState } from "react";

import { Modal } from "@/shared/ui";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose
    } = props;

    const [isLogin, setIsLogin] = useState(true);

    const tabHandler = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <h1>Auth by Phone</h1>
        </Modal>
    );
};

export default memo(AuthModal);