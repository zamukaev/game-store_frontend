
import SubcategoriesContainer from "@/widgets/subcategories/ui/SubcategoriesContainer";

const Category = ({ params }: { params: { title: string } }) => {
    return (
        <section>
            <SubcategoriesContainer params={params} />
        </section>
    );
};

export default Category;
