"use client";

import NextNProgress from "nextjs-progressbar";

import { Categories } from "@/features/categories";

import Products from "@/widgets/products/ui/Products";
import { CartModal } from "@/shared/ui";
import useCartModalStore from "@/widgets/modalCartProducts/model/cartModal-store";

export default function Home() {
    const { modalActive, setModalActive } = useCartModalStore();
    return (
        <>
            <NextNProgress
                color="var(--color-orange)"
                height={3}
                options={{ showSpinner: false }}
            />
            <main className="main">
                <Categories />
                <div className="main_content">
                    <Products />
                </div>
            </main>
            <CartModal active={modalActive} setActive={setModalActive} />
        </>
    );
}
