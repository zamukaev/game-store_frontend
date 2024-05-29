import api from "@/shared/api/api";
import { CartInterface } from "@/shared/types/cart";
import { Product } from "@/shared/types/product";
import modifyCartData from "@/utils/data/modifyCartData";

export const getCart = async (
    ids: string[]
): Promise<CartInterface[] | undefined> => {
    try {
        const response = await api.post<Product[]>("/getProductsByIds", ids);
        return modifyCartData(response.data);
    } catch (error) {
        console.error("Ошибка при получении Категории:", error);
        return undefined;
    }
};
