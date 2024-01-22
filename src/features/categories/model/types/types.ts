interface categoriesSchema {
    _id: string;
    title: string;
    urlImg: string;
    subcategories: any[];
}
export interface CategoriesState {
    categories: categoriesSchema[];
    getCategories: () => void;
}