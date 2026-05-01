import Image from "next/image";
import { CiStar } from "react-icons/ci";

const ProductCard = ({ product }) => {
    const {name, image, rating, price} = product;
    return (
        <div className="border border-gray-300 p-5 rounded-xl flex flex-col h-full">
            <div className="w-full aspect-square relative mb-3">
                <Image alt={name} src={image} fill className="object-cover rounded-md" sizes="(min-width: 808px) 50vw, 100vw"/>
            </div>
            <div className="flex-grow">
            <h2 className="font-bold">{name}</h2>
            <p className="flex items-center gap-1 text-sm my-2"><CiStar />{rating}</p>
            <p className="mb-3">${price}</p>
            </div>
            <div>
            <button className="btn-one w-full">View Details</button>
            </div>
        </div>
    );
};

export default ProductCard;