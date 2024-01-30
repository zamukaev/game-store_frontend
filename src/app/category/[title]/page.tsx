import { SubcategoriesContainer } from "@/widgets/subcategories";

const Category = ({ params }: { params: { title: string } }) => {
    return (
        <section>
            <SubcategoriesContainer params={params} />
        </section>
    );
};

export default Category;
