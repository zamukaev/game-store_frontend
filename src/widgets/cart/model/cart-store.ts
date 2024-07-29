import create from "zustand";
import { useCallback } from "react";

import { CartInterface } from "@/shared/types/cart";
import localStorageApi from "@/utils/data/localStorageApi";

import { getCart } from "../api";

interface CartState {
    carts: CartInterface[];
    selectedCart: CartInterface[];
    selectAllCart: boolean;
    selectedCartIds: string[];
    setCarts: (carts: CartInterface[]) => void;
    setSelectedCart: (selectedCart: CartInterface[]) => void;
    setSelectAllCart: (selectAllCart: boolean) => void;
    setSelectedCartIds: (selectedCartIds: string[]) => void;
    totalSelectedItems: number;
    totalPrice: number;
    cartCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectAllCartHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checkIsCartSelected: () => void;
    getCount: (count: number, productId: string) => void;
    removeSelectedCart: () => void;
    removeCartItem: (productId: string) => void;
    getSelectedCartIds: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
    carts: [],
    selectedCart: [],
    selectAllCart: true,
    selectedCartIds: [],

    setCarts: (carts) => set({ carts }),
    setSelectedCart: (selectedCart) => set({ selectedCart }),
    setSelectAllCart: (selectAllCart) => set({ selectAllCart }),
    setSelectedCartIds: (selectedCartIds) => set({ selectedCartIds }),

    get totalSelectedItems() {
        return get().selectedCart.reduce(
            (total, item) => total + item.count,
            0
        );
    },

    get totalPrice() {
        return get().selectedCart.reduce(
            (total, item) => total + item.totalPrice,
            0
        );
    },

    cartCheckHandler: (event) => {
        const productId = event.target.value;
        const updatedCarts = get().carts.map((cart) =>
            cart._id === productId
                ? { ...cart, selected: event.target.checked }
                : cart
        );
        set({ carts: updatedCarts });
        set({ selectedCart: updatedCarts.filter((cart) => cart.selected) });
    },

    selectAllCartHandler: (event) => {
        const isSelected = event.target.checked;
        const updatedCarts = get().carts.map((cart) => ({
            ...cart,
            selected: isSelected,
        }));
        set({ carts: updatedCarts });
        set({ selectedCart: isSelected ? updatedCarts : [] });
        set({ selectAllCart: isSelected });
    },

    checkIsCartSelected: () => {
        set({ selectAllCart: get().carts.every((cart) => cart.selected) });
    },

    getCount: (count, productId) => {
        if (count < 1) {
            set({
                carts: get().carts.filter((cart) => cart._id !== productId),
            });
            localStorageApi.removeDataFromLocalSt("cart", productId);
        }

        const updateCart = (cart: any) =>
            cart._id === productId
                ? { ...cart, count: count, totalPrice: cart.price * count }
                : cart;

        set({ selectedCart: get().selectedCart.map(updateCart) });
        set({ carts: get().carts.map(updateCart) });
    },

    removeSelectedCart: () => {
        localStorageApi.removeSelectedCart("cart", get().selectedCartIds);
        set({
            carts: get().carts.filter((cart) => !cart.selected),
            selectedCart: [],
        });
    },

    removeCartItem: (productId) => {
        localStorageApi.removeDataFromLocalSt("cart", productId);
        set({
            carts: get().carts.filter((cart) => cart._id !== productId),
            selectedCart: get().selectedCart.filter(
                (cart) => cart._id !== productId
            ),
        });
    },

    getSelectedCartIds: () => {
        const ids = get().selectedCart.map((cart) => cart._id);
        set({ selectedCartIds: ids });
    },
}));

export default useCartStore;
