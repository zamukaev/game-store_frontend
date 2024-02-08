import api from "@/shared/api/api";
import { Product } from "@/shared/types/product";

export const getProductsBySubcategory = async (queryParams: any): Promise<Product[] | undefined> => {
    try {
        const response = await api.get<Product[]>(`/getProductsBySubcategory/?${queryParams}`);
        return response.data;
    } catch (error) {
        //console.error("Ошибка при получении Категории:", error);
        return undefined;
    }
};