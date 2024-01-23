import { Product } from "./product";

export interface Subcategories{
    _id: string;
    title: string;
    originTitle:string;
    urlImg: string; 
}

export interface Categories {
    _id: string;
    title: string;
    originTitle:string;
    urlImg: string;
    subcategories: Subcategories[];
}