import { Product } from "@/shared/types/product";

import { getMaxPrice } from "./getMaxPrice";

describe("get max price", () => {
    it("returns the result 30", () => {
        const product: Product[] = [
            {
                _id: "1",
                name: "Single Product",
                price: 15,
                selected: true,
                count: 1,
                totalPrice: 10,
                category: "",
                characteristic: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
                desc: "",
                title: "",
            },
            {
                _id: "2",
                name: "Single Product",
                price: 15,
                selected: true,
                count: 1,
                totalPrice: 5,
                category: "",
                characteristic: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
                desc: "",
                title: "",
            },
        ];
        const result = getMaxPrice(product);
        expect(result).toBe(15);
    });

    it("returns the result 50", () => {
        const product: Product[] = [
            {
                _id: "1",
                name: "Single Product",
                price: 15,
                selected: true,
                count: 1,
                totalPrice: 15,
                category: "",
                characteristic: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
                desc: "",
                title: "",
            },
            {
                _id: "2",
                name: "Single Product",
                price: 15,
                selected: true,
                count: 1,
                totalPrice: 15,
                category: "",
                characteristic: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
                desc: "",
                title: "",
            },
            {
                _id: "3",
                name: "Single Product",
                price: 20,
                selected: true,
                count: 1,
                totalPrice: 15,
                category: "",
                characteristic: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
                desc: "",
                title: "",
            },
        ];
        const result = getMaxPrice(product);
        expect(result).toBe(20);
    });
});
