import React from 'react';
import {Link} from '@inertiajs/react';



function Errors({ status , message }) {

    console.log(status);
    console.log(message);



    return (

        <>

            {/* 403 */}
            {status === 403 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">403</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Access Denied 🚫</h2>
                    <p className="mt-2 text-gray-600">Oops! You don’t have permission to access this page</p>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }
            
            {/* 404 */}
            {status === 404 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">404</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Page Not Found 😕</h2>
                    <p className="mt-2 text-gray-600">Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or never existed in the first place.</p>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }        
        
            {/* 500 */}
            {status === 500 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">500</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Internal Server Error 😵</h2>
                    <p className="mt-2 text-gray-600">Something went wrong on our end. We're working to fix it!</p>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }



            {/* 400 */}
            {status === 400 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">400</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Bad Request</h2>
                    <p className="mt-2 text-gray-600">Oops! The request couldn't be understood by the server. Please check your input and try again</p>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }


            {/* 401 */}
            {status === 401 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">401</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Unauthorized</h2>
                    <p className="mt-2 text-gray-600">You need to log in to access this page. Please authenticate first.</p>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }




            {/* 402 */}
            {status === 402 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">402</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Payment Required</h2>
                    <p className="mt-2 text-gray-600">This content requires payment. Please complete your purchase to proceed.</p>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }


            {/* 405 */}
            {status === 402 &&
            
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-9xl font-bold text-red-500">405</h1>
                    <h2 className="mt-4 text-2xl font-semibold">Method is not supported</h2>
                    <Link href={route('shop.index')} className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Go Back
                    </Link>
                </div>
            }


        </>

    );
}



export default Errors;