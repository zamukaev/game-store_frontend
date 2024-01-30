import api from "@/shared/api/api";
import { Category } from "@/shared/types/categories";


export const getCategories = async (): Promise<Category[] | undefined> => {
    try {
        const response = await api.get<Category[]>("/categories");
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении Категории:", error);
        return undefined;
    }
};
