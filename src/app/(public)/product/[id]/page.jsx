import { getProductsData } from "@/lib/allFetchData";
import ProductDetail from "@/pages/products/ProductDetail";

const ProductPage = async({params}) => {
    const productsData = await getProductsData();
    const {id} = await params;
    const findProduct = productsData.find(p => p.id === Number(id));
    return (
        <div>
            <ProductDetail product={findProduct}/>
        </div>
    );
};

export default ProductPage;