import api from "@/shared/api/api";
import { Subcategory } from "@/shared/types/subcategories";

export const getProductsBySubcategory = async (
    queryParams: any
): Promise<Subcategory | undefined> => {
    try {
        const response = await api.get<Subcategory>(
            `/getProductsBySubcategory/?${queryParams}`
        );
        return response.data;
    } catch (error) {
        //console.error("Ошибка при получении Категории:", error);
        return undefined;
    }
};
