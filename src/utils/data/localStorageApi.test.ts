import { CartInterface } from "@/shared/types/cart";

import localStorageApi from "./localStorageApi";

// Mock the localStorage
const localStorageMock = (() => {
    let store: { [key: string]: string } = {};

    return {
        getItem(key: string) {
            return store[key] || null;
        },
        setItem(key: string, value: string) {
            store[key] = value;
        },
        removeItem(key: string) {
            delete store[key];
        },
        clear() {
            store = {};
        },
    };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("LocalStorageApi", () => {
    const key = "testKey";
    const data = "testData";
    const cartIds: string[] = ["1"];

    beforeEach(() => {
        localStorage.clear();
    });

    it("should return undefined if localStorage is empty", () => {
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toBeUndefined();
    });

    it("should set and get data from localStorage", () => {
        localStorageApi.setItemToLocalSt(data, key);
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toEqual([data]);
    });

    it("should not duplicate data in localStorage", () => {
        localStorageApi.setItemToLocalSt(data, key);
        localStorageApi.setItemToLocalSt(data, key);
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toEqual([data]);
    });

    it("should add new data to localStorage", () => {
        const newData = "newData";
        localStorageApi.setItemToLocalSt(data, key);
        localStorageApi.setItemToLocalSt(newData, key);
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toEqual([data, newData]);
    });

    it("should remove data from localStorage", () => {
        localStorageApi.setItemToLocalSt(data, key);
        localStorageApi.removeDataFromLocalSt(key, data);
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toEqual([]);
    });

    it("should remove selected cart items from localStorage", () => {
        localStorage.setItem(key, JSON.stringify(cartIds.map((item) => item)));
        localStorageApi.removeSelectedCart(key, cartIds);
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toEqual([]);
    });

    it("should not fail when removing a non-existing item", () => {
        localStorageApi.removeDataFromLocalSt(key, "nonExistingId");
        const result = localStorageApi.getDataFromLocalSt(key);
        expect(result).toBeUndefined();
    });
});
