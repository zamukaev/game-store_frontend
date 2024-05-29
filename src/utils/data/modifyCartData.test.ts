import { CartInterface } from "@/shared/types/cart";
import { Product } from "@/shared/types/product";

import modifyCartData from "./modifyCartData";

describe("modifyCartData", () => {
    it("returns an empty array when no data is provided", () => {
        const result = modifyCartData();
        expect(result).toEqual([]);
    });

    it("modifies product data correctly", () => {
        const products: Product[] = [
            {
                id: "1",
                name: "Product 1",
                price: 10,
                _id: "",
                title: "",
                desc: "",
                characteristic: "",
                category: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
            },
            {
                id: "2",
                name: "Product 2",
                price: 20,
                _id: "",
                title: "",
                desc: "",
                characteristic: "",
                category: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
            },
        ];

        const expected: CartInterface[] = [
            {
                id: "1",
                name: "Product 1",
                price: 10,
                selected: true,
                count: 1,
                totalPrice: 10,
                _id: "",
                title: "",
                desc: "",
                characteristic: "",
                category: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
            },
            {
                id: "2",
                name: "Product 2",
                price: 20,
                selected: true,
                count: 1,
                totalPrice: 20,
                _id: "",
                title: "",
                desc: "",
                characteristic: "",
                category: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
            },
        ];

        const result = modifyCartData(products);
        expect(result).toEqual(expected);
    });

    it("handles an empty array correctly", () => {
        const result = modifyCartData([]);
        expect(result).toEqual([]);
    });

    it("handles a single product correctly", () => {
        const products: Product[] = [
            {
                id: "1",
                name: "Single Product",
                price: 15,
                _id: "",
                title: "",
                desc: "",
                characteristic: "",
                category: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
            },
        ];

        const expected: CartInterface[] = [
            {
                id: "1",
                name: "Single Product",
                price: 15,
                selected: true,
                count: 1,
                totalPrice: 15,
                _id: "",
                title: "",
                desc: "",
                characteristic: "",
                category: "",
                hit: false,
                inStock: false,
                discount: false,
                urlImages: [],
                reviews: [],
            },
        ];

        const result = modifyCartData(products);
        expect(result).toEqual(expected);
    });
});
