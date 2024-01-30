export interface Subcategory {
    _id: string;
    title: string;
    originTitle: string;
    urlImg: string;
}

export interface Category extends Subcategory {
    subcategories: Subcategory[];
}
