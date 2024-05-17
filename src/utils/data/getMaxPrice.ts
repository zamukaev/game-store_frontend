import { Product } from "@/shared/types/product";

export const getMaxPrice = (goods: Product[]): number | undefined => {
    return goods.reduce((accum: number, item: Product) => {
        if (item.price > accum) {
            accum = item.price;
        }
        return accum;
    }, 0);
};
