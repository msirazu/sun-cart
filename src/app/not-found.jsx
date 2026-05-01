import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-4 text-center">
            {/* Summer/Sun Icon or Illustration */}
            <div className="relative mb-8">
                <h1 className="text-9xl font-extrabold text-orange-400 opacity-20">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl">☀️</span>
                </div>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Oops! This spot is too hot to handle.
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for has melted away or never existed in our summer collection. Let&apos;s get you back to the cool breeze!
            </p>

            {/* Action Button */}
            <Link href="/">
                <button className="btn btn-lg bg-orange-500 hover:bg-orange-600 text-white border-none px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                    Back to Home
                </button>
            </Link>

            {/* Extra Decorative Element */}
            <div className="mt-12 flex gap-4 text-4xl grayscale opacity-30">
                <span>🏖️</span>
                <span>🍦</span>
                <span>🕶️</span>
            </div>
        </div>
    );
};

export default NotFoundPage;