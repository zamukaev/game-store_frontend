import { FC, InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isToggled?: boolean;
    onToggle?: () => void;
}

const Switcher: FC<SwitcherProps> = (props) => {
    const { className = "", isToggled, onToggle, ...otherProps } = props;
    const cls = `${styles.switch} ${className}`;
    return (
        <label className={cls}>
            <input
                type="checkbox"
                checked={isToggled}
                onChange={onToggle}
                {...otherProps}
            />
            <span className={styles.item} />
        </label>
    );
};

export default Switcher;
