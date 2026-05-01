import { getProductsData } from "@/lib/allFetchData";
import ProductCard from "./ProductCard";

const PopularProducts = async() => {

    const productsData = await getProductsData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {productsData.slice(0,3).map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
    );
};

export default PopularProducts;