import api from "@/shared/api/api";
import { Category } from "@/shared/types/categories";

export const getCategoryByTitle = async (
    title: string
): Promise<Category | undefined> => {
    try {
        const response = await api.get<Category>(`/category/${title}`);
        return response.data;
    } catch (error) {
        return undefined;
    }
};
