import dynamic from "next/dynamic";
// components/MyChart.js contains the recharts chart
const SubcategoriesContent = dynamic(
    () => import("@/widgets/subcategories/ui/SubcategoriesContainer"),
    { ssr: false }
);

const Category = ({ params }: { params: { title: string } }) => {
    return (
        <section>
            <SubcategoriesContent params={params} />
        </section>
    );
};

export default Category;
