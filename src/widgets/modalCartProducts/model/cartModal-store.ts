import { create } from "zustand";

type CartModalStore = {
    modalActive: boolean;
    setModalActive: any;
};

const useCartModalStore = create<CartModalStore>((set) => ({
    modalActive: false,
    setModalActive: (active: boolean) => set({ modalActive: active }),
}));

export default useCartModalStore;
