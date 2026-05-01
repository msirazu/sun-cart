'use client';

import Link from "next/link";
import { useEffect } from "react";

const GlobalErrorPage = ({error, reset}) => {
        useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
            {/* Warning Icon */}
            <div className="bg-red-100 p-6 rounded-full mb-6">
                <span className="text-6xl">⚠️</span>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Something went wrong!</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Don&apos;t worry, even the brightest summer days can have a little rain. 
                The system encountered an unexpected error.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => reset()}
                    className="btn btn-primary bg-orange-500 hover:bg-orange-600 border-none text-white px-8"
                >
                    Try Again
                </button>
                
                <Link href="/">
                    <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 px-8">
                        Go to Home
                    </button>
                </Link>
            </div>

            {/* Technical Detail (Optional - for debugging) */}
            <p className="mt-10 text-xs text-gray-400 font-mono">
                Error ID: {error?.digest || "Unknown Session"}
            </p>
        </div>
    );
};

export default GlobalErrorPage;