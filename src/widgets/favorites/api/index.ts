import axios from "axios";

import { Product } from "@/shared/types/product";

export const fetchFavoriteProducts = async (
    ids: string[]
): Promise<Product[] | undefined> => {
    try {
        const response = await axios.post<Product[]>(
            "https://gamestore-backend.vercel.app/api/getProductsByIds",
            ids
        );
        return response.data;
    } catch (error) {
        return undefined;
    }
};
