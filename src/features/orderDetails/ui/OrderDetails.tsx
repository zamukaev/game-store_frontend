import { FC } from "react";

import { Headline, Button, HeadlineSize } from "@/shared/ui";
import { formatCurrency } from "@/utils/string/formatCurrency";
import formatProductItem from "@/utils/string/formatProductItem";

import styles from "./styles.module.scss";

interface OrderDetailsProps {
    totalSelectedItems: number;
    totalPrice: number;
}

const OrderDetails: FC<OrderDetailsProps> = (props) => {
    const { totalSelectedItems, totalPrice } = props;
    return (
        <div className={styles.cart_order}>
            <Headline className={styles.order_title} Size={HeadlineSize.M}>
                Детали заказа
            </Headline>
            <div className={styles.order_details}>
                {!!totalSelectedItems ? (
                    <>
                        <div className={styles.order_items}>
                            <span className={styles.total}>Итого:</span>
                            <p className={styles.items}>
                                {totalSelectedItems}{" "}
                                {formatProductItem(totalSelectedItems, "товар")}
                            </p>
                        </div>
                        <p className={styles.order_price}>
                            {formatCurrency(totalPrice)}
                        </p>
                    </>
                ) : (
                    <div>
                        <Headline
                            className={styles.empty_title}
                            Size={HeadlineSize.S}
                        >
                            Нет выбранных товаров.
                        </Headline>
                        <p className={styles.empty_text}>
                            Пожалуйста, выберите товар, чтобы оформить заказ!
                        </p>
                    </div>
                )}
            </div>
            <Button disabled={!totalSelectedItems} kind="cart">
                Перейти к оформлению
            </Button>
        </div>
    );
};

export default OrderDetails;
