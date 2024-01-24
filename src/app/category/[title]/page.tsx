import { Headline } from "@/shared/ui";

const Category = ({ params }: { params: { title: string } }) => {
    return (
        <section>
            <Headline>{params.title}</Headline>
        </section>
    );
};

export default Category;
