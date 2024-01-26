import { Subcategories } from "@/widgets/subcategories";

const Category = ({ params }: { params: { title: string } }) => {
    return (
        <section>
            <Subcategories params={params} />
        </section>
    );
};

export default Category;
