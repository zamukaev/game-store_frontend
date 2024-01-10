export interface Product {
    title: string;
    desc: string;
    characteristic: string;
    category: string;
    price: number;
    oldPrice?: number;
    hit: boolean;
    inStock: boolean;
    discount: boolean;
    urlImages: string[];
    reviews: string[];
}
