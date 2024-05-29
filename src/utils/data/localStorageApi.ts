class LocalStorageApi {
    public isLocalStrDefined = typeof window !== "undefined";

    public getDataFromLocalSt(key: string) {
        if (this.isLocalStrDefined && localStorage.getItem(key)) {
            const items: string[] = JSON.parse(
                localStorage.getItem(key) || "[]"
            );
            return items;
        }
    }

    public setItemToLocalSt(data: any, key: string) {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([data]));
        }
        let items = JSON.parse(localStorage.getItem(key) || "[]");
        items = items.includes(data) ? items : [...items, data];
        localStorage.setItem(key, JSON.stringify(items));
    }

    public removeDataFromLocalSt(key: string, id: string) {
        if (localStorage.getItem(key)) {
            let items: any = JSON.parse(localStorage.getItem(key) || "[]");
            items = items.filter((item: any) => item !== id);
            localStorage.setItem(key, JSON.stringify(items));
        }
    }

    public removeSelectedCart(key: string, ids: string[]) {
        if (localStorage.getItem(key)) {
            let items: string[] = JSON.parse(localStorage.getItem(key) || "[]");
            items = items.filter((item) => !ids.includes(item));
            localStorage.setItem(key, JSON.stringify(items));
        }
    }
}
export default new LocalStorageApi();
