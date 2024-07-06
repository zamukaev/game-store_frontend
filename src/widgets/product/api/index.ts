import api from "@/shared/api/api";
import { Product } from "@/shared/types/product";

export const getProduct = async (id: string): Promise<Product | undefined> => {
    try {
        const response = await api.get<Product>(`/product/${id}`);
        return response.data;
    } catch (error) {
        return undefined;
    }
};

export const getProductScore = async (
    id: string
): Promise<number | undefined> => {
    try {
        const response = await api.get<number>(`/getScoreProduct/${id}`);
        return response.data;
    } catch (error) {
        return undefined;
    }
};
