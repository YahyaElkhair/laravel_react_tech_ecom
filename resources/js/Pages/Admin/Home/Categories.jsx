import AdminLayout from "../Layout/AdminLayout";
import AddBtn from "../Components/AddBtn";
import ActionLink from "../Components/ActionLink";
import { Head } from '@inertiajs/react';

function Categories({ categories }) {
    return (
        <AdminLayout isEnableSearch={true} search_placeholder='Search for category...'>
            <Head title="Categories" />

            <div className="dash-content p-4 md:p-6 ">
                <h2 className="text-2xl text-center font-bold text-gray-800 mt-5 mb-5">Product Categories</h2>

                {categories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {categories.map((category) => {
                            const specifications = JSON.parse(category.specifications);
                            
                            return (
                                <div key={category.id} className="bg-white rounded-lg shadow-custom overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="p-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                {category.name}
                                            </h3>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                ID: {category.id}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {category.description}
                                        </p>
                                        
                                        {specifications.length > 0 && (
                                            <div className="mb-3">
                                                <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                                                    Specifications
                                                </h4>
                                                <ul className="space-y-1">
                                                    {specifications.map((spec, index) => (
                                                        <li key={index} className="text-sm text-gray-700 flex items-start">
                                                            <span className="text-gray-400 mr-1">•</span>
                                                            {spec}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        
                                        <div className="flex space-x-2 mt-4">
                                            <ActionLink 
                                                type='edit' 
                                                link_text='Edit' 
                                                link_to='admin.categories.edit' 
                                                link_args={category.id}

                                            />
                                            <ActionLink 
                                                type='del' 
                                                link_text='Delete' 
                                                link_to='admin.categories.destroy' 
                                                link_args={category.id}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-medium text-gray-700 mb-2">No categories found</h2>
                        <p className="text-gray-500 mb-4">Get started by creating your first category</p>
                        <AddBtn link_to='admin.categories.create' />
                    </div>
                )}

                <div className="flex justify-end mb-6">
                    <AddBtn link_to='admin.categories.create' />
                </div>
            </div>
        </AdminLayout>
    );
}

export default Categories;