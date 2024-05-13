import { Inter } from "next/font/google";

import { TopHeader } from "@/widgets/topHeader";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

import { QueryProvider } from "./_providers/Query-provider";

import type { Metadata } from "next";

import "@/app/styles/_globals.scss";
import "@/app/styles/_vars.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Game Store",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                <section className="container">
                    <header className="header">
                        <TopHeader />
                        <Header />
                    </header>
                    <QueryProvider>{children}</QueryProvider>
                    <Footer />
                </section>
            </body>
        </html>
    );
}
