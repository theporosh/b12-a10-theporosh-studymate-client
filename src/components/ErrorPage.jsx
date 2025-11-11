import React from 'react';
import { ArrowLeftCircle } from "lucide-react";
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div >
           
            <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-base-content text-center px-4">
                <div className="max-w-md">
                    <h1 className="text-9xl font-extrabold text-primary">404</h1>
                    <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
                    <p className="text-base-content/70 mt-2">
                        The page you’re looking for doesn’t exist or has been moved.
                        Let’s get you back on track!
                    </p>

                    {/* Animated illustration */}
                    <div className="mt-8">
                        <img
                            src="https://i.ibb.co.com/VpqHf7z0/animation.gif"
                            alt="Not Found"
                            className="w-72 mx-auto"
                        />
                    </div>

                    {/* Back button */}
                    <Link
                        to="/"
                        className="mt-10 inline-flex items-center gap-2 px-6 py-3 btn btn-primary rounded-full text-lg"
                    >
                        <ArrowLeftCircle size={22} />
                        Back to Home
                    </Link>
                </div>
            </div>
           
        </div>
    );
};

export default ErrorPage;