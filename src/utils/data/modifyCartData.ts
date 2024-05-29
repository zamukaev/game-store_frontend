import { CartInterface } from "@/shared/types/cart";
import { Product } from "@/shared/types/product";

function modifyCartData(data?: Product[]): CartInterface[] | [] {
    if (data) {
        const newCartArray: CartInterface[] = data.map((item: Product) => ({
            ...item,
            selected: true,
            count: 1,
            totalPrice: item.price,
        }));
        return newCartArray;
    }
    return [];
}

export default modifyCartData;
