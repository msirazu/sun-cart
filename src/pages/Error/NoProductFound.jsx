import Link from "next/link";

const NoProductFound = () => {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            
            <div className="relative mb-6">
                <span className="text-8xl opacity-20">🏖️</span>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">🔍</span>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No Summer Essentials Found!
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm">
                We couldn&apos;t find any products matching your search or filter. Try using different keywords or clear your filters to see our full collection.
            </p>

            <div className="flex gap-4">
                <Link href="/products">
                    <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white px-8">
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NoProductFound;