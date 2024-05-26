import { CartInterface } from "@/shared/types/cart";
class LocalStorageApi {
    public isLocalStrDefined = typeof window !== "undefined";

    public getDataFromLocalSt(key: string) {
        if (this.isLocalStrDefined && localStorage.getItem(key)) {
            const item: string[] = JSON.parse(localStorage.getItem(key) || "");
            return item;
        }
    }

    public setItemToLocalSt(data: any, key: string) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([data]));
        }
        let item = JSON.parse(localStorage.getItem(key) || "");
        item = item.includes(data) ? item : [...item, data];
        localStorage.setItem(key, JSON.stringify(item));
    }

    public removeDataFromLocalSt(key: string, id: string) {
        if (localStorage.getItem(key)) {
            let items: any = JSON.parse(localStorage.getItem(key) || "");
            items = items.filter((item: any) => item !== id);
            localStorage.setItem(key, JSON.stringify(items));
        }
    }
    public removeSelectedCart(key: string, data: CartInterface[]) {
        if (localStorage.getItem(key)) {
            let items: string[] = JSON.parse(localStorage.getItem(key) || "");
            items = items.filter((item) =>
                data.find((cart) => cart._id !== item)
            );
            localStorage.setItem(key, JSON.stringify(items));
        }
    }
}
export default new LocalStorageApi();
