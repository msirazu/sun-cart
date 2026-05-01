import Image from "next/image";
import { CiStar } from "react-icons/ci";
import fallbackImg from '@/assets/images/fallback-image.png';
import Link from "next/link";

const ProductCard = ({ product }) => {
    if (!product) return null;
    const {name, image, rating, price, id} = product || {};
    const imgSrc = image || fallbackImg;
    return (
        <div className="border border-gray-300 p-5 rounded-xl flex flex-col h-full">
            <div className="w-full aspect-square relative mb-3">
                <Image alt={name || 'product image'} src={imgSrc} fill className="object-cover rounded-md" sizes="(min-width: 808px) 50vw, 100vw"/>
            </div>
            <div className="grow">
            <h2 className="font-bold">{name || 'product'}</h2>
            <p className="flex items-center gap-1 text-sm my-2"><CiStar />{rating || 'N/A'}</p>
            <p className="mb-3">${price || 0}</p>
            </div>
            <div>
            <Link href={`/product/${id}`} className="btn-one w-full inline-block text-center">View Details</Link>
            </div>
        </div>
    );
};

export default ProductCard;