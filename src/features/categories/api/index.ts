import api from "@/shared/api/api";
import { Categories } from "@/shared/types/categories";

export const getCategories = async (): Promise<Categories[] | undefined> => {
    try {
        const response = await api.get<Categories[]>("/categories");
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении Категории:", error);
        return undefined;
    }
};
