import { getProductsData } from "@/lib/allFetchData";
import ProductCard from "@/pages/products/ProductCard";

export const metadata = {
    title: 'All Products | Sun Cart',
    description: 'all products page of sun cart web site'
}

const ProductsPage = async() => {
    const productsData = await getProductsData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
            {productsData.map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
    );
};

export default ProductsPage;