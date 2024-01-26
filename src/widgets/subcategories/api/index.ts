import api from "@/shared/api/api";
import { Categories } from "@/shared/types/categories";

export const getCategoryByTitle = async (
    title: string
): Promise<Categories | undefined> => {
    try {
        const response = await api.get<Categories>(`/category/${title}`);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении Категории:", error);
        return undefined;
    }
};
