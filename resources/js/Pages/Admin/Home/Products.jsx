import AdminLayout from "../Layout/AdminLayout";
import AddBtn from "../Components/AddBtn";
import ActionLink from "../Components/ActionLink";
import { Link } from "@inertiajs/react";

function Products({ products }) {


    // Star rating component
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center">
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
                
                {hasHalfStar && (
                    <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 1a.999.999 0 01.897.553l1.93 3.91 4.317.628a1 1 0 01.554 1.706l-3.124 3.039.738 4.3a1 1 0 01-1.451 1.054L10 13.347l-3.86 2.03a1 1 0 01-1.45-1.054l.737-4.3-3.124-3.039a1 1 0 01.554-1.706l4.317-.628L9.103 1.553A1 1 0 0110 1zm0 2.445L8.332 6.97a1 1 0 01-.752.547l-3.493.507 2.527 2.464a1 1 0 01.287.885l-.596 3.476 3.12-1.642a1 1 0 01.932 0l3.12 1.642-.596-3.476a1 1 0 01.287-.885l2.527-2.464-3.493-.507a1 1 0 01-.752-.547L10 3.445v.001z" />
                    </svg>
                )}
                
                {[...Array(emptyStars)].map((_, i) => (
                    <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };






















    return (
        <AdminLayout isEnableSearch={true} search_placeholder="Search for product...">
            <div className="dash-content p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 w-full">
                    {products.map((p) => {
                        const images = JSON.parse(p.images_paths);
                        const firstImage = images[0] || '/placeholder.jpg';
                        const vid = p.video_url;

                        return (
                            <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
                                {/* Thumbnail Section */}
                                <div className="h-48 bg-gray-100 relative flex-shrink-0">
                                    <img 
                                        src={p.thumbnail || firstImage} 
                                        alt="Product thumbnail" 
                                        className="w-full h-full object-cover"
                                    />
                                    <span className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                        {p.is_active ? (
                                            <>
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Active
                                            </>
                                        ) : (
                                            <>
                                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                Inactive
                                            </>
                                        )}
                                    </span>
                                </div>

                                {/* Product Info */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-semibold truncate pr-2">{p.name}</h3>
                                        <div className="text-right min-w-[100px]">
                                            <span className="text-xl font-bold text-blue-600">
                                                ${p.price_after_discount || p.price}
                                            </span>
                                            {p.discount && (
                                                <span className="ml-2 text-sm text-gray-500 line-through block">
                                                    ${p.price}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                                        <div className="flex justify-between">
                                            <span>Category:</span>
                                            <span className="font-medium">{p.category.name}</span>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <span>Stock:</span>
                                            <span className={`font-medium ${p.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {p.stock} available
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span>Rating:</span>
                                            <div className="flex items-center gap-1">
                                                {renderStars(p.rating)}
                                                <span className="text-sm text-gray-500 ml-1">
                                                    ({p.rating})
                                                </span>
                                            </div>
                                        </div>



                                    </div>

                                    {/* Tags */}
                                    {p.tags.length > 0 && (
                                        <div className="mt-auto flex flex-wrap gap-2 mb-4">
                                            {p.tags.map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Specifications Accordion */}
                                    <details className="mt-2 group">
                                        <summary className="flex items-center justify-between cursor-pointer p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <span className="text-gray-700 font-medium">Specifications</span>
                                            <svg 
                                                className="w-5 h-5 transform group-open:rotate-180 transition-transform text-gray-500" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="mt-3 space-y-2">
                                            {p.specifications.map((spec, index) => 
                                                Object.entries(spec).map(([key, value]) => (
                                                    <div 
                                                        key={`${index}-${key}`} 
                                                        className="flex justify-between items-start p-2 bg-gray-50 rounded-lg"
                                                    >
                                                        <span className="text-sm font-medium text-gray-600 pr-2">{key}:</span>
                                                        <span className="text-sm text-gray-700 break-words text-right">{value}</span>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </details>

                                    {/* Additional Media */}
                                    {(images.length > 1 || vid) && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Media</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {vid && 
                                                    <video 
                                                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                                                        controls
                                                        src={vid}
                                                        alt="Product video"
                                                    />
                                                }
                                                {images.slice(vid ? 0 : 1).map((img, index) => (
                                                    <img
                                                        key={index}
                                                        src={img}
                                                        alt={`Product view ${index + 1}`}
                                                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="mt-4 flex gap-2 border-t pt-4">
                                        <ActionLink 
                                            type="infos"
                                            link_text="Edit"
                                            link_to="admin.products.show" 
                                            link_args={p.id}
                                            className="flex-1 text-center py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                                        />
                                        <ActionLink 
                                            type="del"
                                            link_text="Delete"
                                            link_to="admin.products.destroy" 
                                            link_args={p.id}
                                            className="flex-1 text-center py-2 px-4 hover:bg-red-50 rounded-lg transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {products.length === 0 && (
                    <div className="text-center py-12">
                        <div className="max-w-md mx-auto">
                            <svg 
                                className="w-24 h-24 mx-auto text-gray-400 mb-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <h1 className="text-2xl text-gray-500 mb-4">No products found</h1>
                            <AddBtn link_to="admin.products.create" />
                        </div>
                    </div>
                )}

                {/* Floating Add Button */}
                {products.length > 0 && (
                    <div className="fixed bottom-8 right-8">
                        <AddBtn link_to="admin.products.create" />
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export default Products;