import React from "react";

import styles from "./styles.module.scss";

const Checkbox = () => {
    return (
        <label className={styles.container}>
            <input type="checkbox" className={styles.input} />
            <div className={styles.indicator} />
        </label>
    );
};

export default Checkbox;
