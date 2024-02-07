import ProductsPage from "@/pages/productsPage/ProductsPage";

const Products = ({ params }: { params: { title: string } }) => {
    return <ProductsPage title={params.title} />;
};

export default Products;