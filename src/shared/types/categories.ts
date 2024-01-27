export interface Subcategory {
    id: string;
    title: string;
    originTitle: string;
    urlImg: string;
}

export interface Category extends Subcategory {
    subcategories: Subcategory[];
}
