import { create } from "zustand";

type FavoritesState = {
    favorites: string[];
    toggleFavorite: (id: string) => void;
};

const useFavoritesStore = create<FavoritesState>((set) => ({
    favorites:
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("favorites") || "[]")
            : [],
    toggleFavorite: (id: string) => {
        set((state) => {
            const favorites = [...state.favorites];
            const index = favorites.indexOf(id);
            if (index === -1) {
                favorites.push(id);
            } else {
                favorites.splice(index, 1);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            return { favorites };
        });
    },
}));

export default useFavoritesStore;
