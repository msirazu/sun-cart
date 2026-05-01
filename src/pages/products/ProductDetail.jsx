import Image from "next/image";
import fallbackImg from '@/assets/images/fallback-image.png';
import { CiStar } from "react-icons/ci";

const ProductDetail = ({ product }) => {
    console.log(product);
    if (!product) return null;
    const { name, image, rating, price, id, brand, stock, category, description } = product || {};
    const imgSrc = image || fallbackImg;
    return (
        <div className="grid grid-cols-12 gap-5 py-5">
            <section className="col-span-12 md:col-span-5 lg:col-span-4 border border-gray-200 p-5">
                <div className="w-full aspect-square relative">
                    <Image alt={name} src={imgSrc} fill className="object-cover" sizes="(min-width: 808px) 50vw, 100vw" />
                </div>
            </section>
            <section className="col-span-12 md:col-span-7 lg:col-span-8 border border-gray-200 p-5 space-y-3">
                <h1 className="font-bold text-2xl">{name}</h1>
                <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1 text-sm">Category: {category}</p>
                    <p className="text-sm">Brand: {brand}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1 text-sm"><CiStar />{rating || 'N/A'}</p>
                    <p className="text-sm">Quanity Available: {stock}</p>
                </div>
                <p>Price: $<span className="font-bold">{price}</span></p>
                <p>{description}</p>
                <div className="flex gap-2">
                    <button className="btn">Buy Now</button>
                    <button className="btn">Add To Cart</button>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;