export interface Product {
    [x: string]: any;
    _id: string;
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
    reviews: {}[];
    __v?: number;
    originTitle?: string;
}
