import { FC, memo } from "react";

import { Modal } from "@/shared/ui";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: FC<LoginModalProps> = (props) => {
    const { isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            Auth by Phone
        </Modal>
    );
};

export default AuthModal;
