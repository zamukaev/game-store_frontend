import { Product } from "./product";

export interface CartInterface extends Product {
    selected: boolean;
    count: number;
    totalPrice: number;
}
