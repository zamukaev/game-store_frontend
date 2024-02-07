import SubcategoriesPage from "@/pages/subcategoriesPage/SubcategoriesPage";

const CategoryPage = ({ params }: { params: { title: string } }) => {

    return (
        <section>
            <SubcategoriesPage title={params.title} />
        </section>
    );
};

export default CategoryPage;
