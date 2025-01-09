import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
               <h1 className="text-5xl font-bold text-red-600 mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Sorry the page you are looking for does not exist.
               </p>
               <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go Back to Home
        </Link>
           </div>
    );
};

export default ErrorPage;