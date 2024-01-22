import api from "@/shared/api/api";

import { Product } from "@/shared/types/product";

export const getHits = async (): Promise<Product[] | undefined> => {
    try {
        const response = await api.get<Product[]>("/hits");
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении хитов продаж:", error);
        return undefined;
    }
};

export const getDiscounts = async (): Promise<Product[] | undefined> => {
    try {
        const response = await api.get<Product[]>("/discounts");
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении акций:", error);
        return undefined;
    }
};
