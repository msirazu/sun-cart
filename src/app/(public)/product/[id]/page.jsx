import { getProductsData } from "@/lib/allFetchData";
import NoProductFound from "@/pages/Error/NoProductFound";
import ProductDetail from "@/pages/products/ProductDetail";

export const generateMetadata = async({params}) => {
    const productsData = await getProductsData();
    const {id} = await params;
    const findProduct = productsData.find(p => p.id === Number(id));
    if (!findProduct) {
        return {
            title: 'Product Not Found | Sun Cart',
            description: 'The product you are looking for does not exist.'
        }
    }
    return {
        title: `${findProduct.name} | Sun Cart`,
        description: `${findProduct.description}`
    }
}

const ProductPage = async({params}) => {
    const productsData = await getProductsData();
    const {id} = await params;
    const findProduct = productsData.find(p => p.id === Number(id));
    if (!findProduct){
        return <NoProductFound/>;
    }
    return (
        <div>
            <ProductDetail product={findProduct}/>
        </div>
    );
};

export default ProductPage;