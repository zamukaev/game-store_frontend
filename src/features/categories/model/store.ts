import { create } from "zustand";

import api from "@/shared/api/api";

import { CategoriesState } from "./types/types";


export const useCategoriesStore = create<CategoriesState>()((set) => ({
    categories: [],
    getCategories: async () => {
        const response = await api.get("/categories");
        set({ categories: response.data });
    }
}));