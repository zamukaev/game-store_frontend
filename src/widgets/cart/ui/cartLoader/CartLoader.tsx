import React from "react";
import ContentLoader from "react-content-loader";

import styles from "../styles.module.scss";
const CartLoader = (props: any) => {
    return (
        <>
            <div className={styles.back_btn}>
                <ContentLoader
                    speed={2}
                    width={810}
                    height={20}
                    viewBox="0 0 810 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="175" height="20" />
                    <rect x="0" y="60" rx="0" ry="0" width="800" height="2" />
                </ContentLoader>
            </div>

            <div className={styles.cart_title}>
                <ContentLoader
                    speed={2}
                    width={810}
                    height={22}
                    viewBox="0 0 810 22"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="150" height="22" />
                    <rect x="0" y="60" rx="0" ry="0" width="800" height="2" />
                </ContentLoader>
            </div>

            <div className={styles.cart_content}>
                <ul className={styles.cart_list}>
                    <div className={styles.cart_order_select}>
                        <ContentLoader
                            speed={2}
                            width={800}
                            height={51}
                            viewBox="0 0 800 51"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                            {...props}
                        >
                            <circle cx="15" cy="15" r="15" />
                            <rect
                                x="40"
                                y="5"
                                rx="5"
                                ry="5"
                                width="106"
                                height="20"
                            />
                            <rect
                                x="640"
                                y="5"
                                rx="5"
                                ry="5"
                                width="158"
                                height="20"
                            />
                            <rect
                                x="0"
                                y="45"
                                rx="1"
                                ry="1"
                                width="800"
                                height="3"
                            />
                        </ContentLoader>
                    </div>
                    {[1, 2, 3, 4].map((item: number) => (
                        <li style={{ marginBottom: "-5px" }} key={item}>
                            <ContentLoader
                                speed={2}
                                width={810}
                                height={178}
                                viewBox="0 0 810 178"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                                {...props}
                            >
                                <circle cx="15" cy="30" r="15" />
                                <rect
                                    x="40"
                                    y="35"
                                    rx="5"
                                    ry="5"
                                    width="162"
                                    height="106"
                                />
                                <rect
                                    x="240"
                                    y="100"
                                    rx="5"
                                    ry="5"
                                    width="90"
                                    height="30"
                                />
                                <rect
                                    x="240"
                                    y="50"
                                    rx="5"
                                    ry="5"
                                    width="280"
                                    height="15"
                                />
                                <rect
                                    x="728"
                                    y="115"
                                    rx="5"
                                    ry="5"
                                    width="60"
                                    height="15"
                                />
                                <rect
                                    x="706"
                                    y="90"
                                    rx="5"
                                    ry="5"
                                    width="100"
                                    height="20"
                                />
                                <circle cx="795" cy="55" r="12" />
                                <circle cx="755" cy="55" r="12" />
                                <rect
                                    x="0"
                                    y="160"
                                    rx="5"
                                    ry="5"
                                    width="810"
                                    height="3"
                                />
                            </ContentLoader>
                        </li>
                    ))}
                </ul>
                <div>
                    <ContentLoader
                        speed={2}
                        width={362}
                        height={300}
                        viewBox="0 0 362 300"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        {...props}
                    >
                        <rect
                            x="0"
                            y="0"
                            rx="5"
                            ry="5"
                            width="161"
                            height="20"
                        />
                        <rect
                            x="0"
                            y="81"
                            rx="5"
                            ry="5"
                            width="44"
                            height="10"
                        />
                        <rect
                            x="0"
                            y="101"
                            rx="5"
                            ry="5"
                            width="64"
                            height="12"
                        />
                        <rect
                            x="288"
                            y="95"
                            rx="5"
                            ry="5"
                            width="74"
                            height="14"
                        />
                        <rect
                            x="0"
                            y="147"
                            rx="25"
                            ry="25"
                            width="360"
                            height="50"
                        />
                        <rect
                            x="0"
                            y="28"
                            rx="0"
                            ry="0"
                            width="362"
                            height="2"
                        />
                    </ContentLoader>
                </div>
            </div>
        </>
    );
};

export default CartLoader;
