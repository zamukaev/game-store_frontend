import { SubcategoriesContainer } from "@/widgets/subcategories";

const CategoryPage = ({ params }: { params: { title: string } }) => {

    return <SubcategoriesContainer title={params.title} />;
};

export default CategoryPage;
