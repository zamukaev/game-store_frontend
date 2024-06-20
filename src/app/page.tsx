"use client";

import NextNProgress from "nextjs-progressbar";

import { Categories } from "@/features/categories";

import Products from "@/widgets/products/ui/Products";

export default function Home() {
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
        </>
    );
}
