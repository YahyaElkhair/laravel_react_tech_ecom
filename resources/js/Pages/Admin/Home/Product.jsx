import AdminLayout from "../Layout/AdminLayout";
import AddBtn from "../Components/AddBtn";
import ActionLink from "../Components/ActionLink";

import 'CSS/AdminStyling/AdminUserDetails.css';
import 'CSS/AdminStyling/Table.css';
import 'CSS/AdminStyling/Products.css';

import { Head, Link } from "@inertiajs/react";



function Product({product}){
    
    let sp_list = product.specifications.map((s , i ) =>{

        let keys = Object.keys(s);
        let returned_sp_list = [];
        keys.forEach((k) => {
            returned_sp_list.push(
                <li key={`${s}-${i}`}>
                    <div className="sp_container">
                        <span> {k}:</span>
                        <span> {s[k]} </span>
                    </div>
                </li>
            )
        })
        
        return returned_sp_list;

    })


    // get products images
    let prod_imgs_paths = JSON.parse(product.images_paths);
    let prod_imgs_list = prod_imgs_paths.map((e , x) => {
        return(
            <li key={x}>
                <img src={e} alt="product image" className="prod_img" />
            </li>
        )
    });




    let product_table_body = () => {

        // product table body
        return (
            <tr key={product.name}>
                <td>{product.id}</td>
                <td>{product.created_by.email}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.tags.join(', ')}</td>
                <td>{product.description}</td>
                <td>
                    <ul className="sp_ul">
                        {sp_list}
                    </ul>
                </td>
                <td>{product.stock}</td>
                <td>
                    {product.thumbnail ? (
                        <img src={product.thumbnail} alt="Thumbnail" className="prod_img" />
                    ) : (
                        <img src={prod_imgs_paths[0]} alt="Thumbnail" className="prod_img" />

                    )}
                </td>

                <td>
                    <ul className="prod_imgs_ul"  >
                        {prod_imgs_list}
                    </ul>
                </td>

                <td >
                    <div className="prod_vid_td">
                        {product.video_url ? (
                            <video controls >
                                <source src={product.video_url} type="video/mp4" />
                            </video>
                        ) : (
                            'No video'
                        )}
                    </div>
                </td>
                <td>{product.rating}</td>
                <td>{product.views}</td>
                <td>{product.is_active ? 'Active' : 'Inactive'}</td>
                <td>{product.discount ? `${product.discount}%` : 'No discount'}</td>
                <td>{product.price_after_discount ? `$${product.price_after_discount}` : 'N/A'}</td>
                <td>
                    <div className="action-links-container">
                        <ActionLink type='del' link_text='Delete' link_to='admin.products.destroy' link_args={product.id} />
                    </div>
                </td>
            </tr>
        );
    };







    const p_body = product_table_body();

    
    




    return(
        <AdminLayout isEnableSearch={true} search_placeholder='Search for product...'>
            <Head title="Product details"/>
            <div className="dash-content">
                {
                    product && 
                    

                    <>
                        <table className="table-fill">
                            <caption>Product details</caption>
                            <thead>
                                <tr>
                                    <th className="text-left">ID</th>
                                    <th className="text-left">Created by</th>
                                    <th className="text-left">Name</th>
                                    <th className="text-left">Price</th>
                                    <th className="text-left">Category</th>
                                    <th className="text-left">Tags</th>
                                    <th className="text-left">Description</th>
                                    <th className="text-left">Specifications</th>
                                    <th className="text-left">Stock</th>
                                    <th className="text-left">Thumbnail</th>
                                    <th className="text-left">Images</th>
                                    <th className="text-left">Video</th>
                                    <th className="text-left">Rating</th>
                                    <th className="text-left">Views</th>
                                    <th className="text-left">Status</th>
                                    <th className="text-left">Discount</th>
                                    <th className="text-left">Price after discount</th>
                                    <th className="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                {p_body}
                            </tbody>
                        </table>


                        <AddBtn link_to='admin.products.create'/>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />



                        <div className="prod-statistics">

                            <h4>Prod statistics</h4>
                        </div>
                    </>

                }

                {!product
                    && 
                    <>
                        <h1>No products existe</h1>
                        <AddBtn link_to='admin.products.create'/>

                    </>
                
                }

            </div>
        </AdminLayout>
    )


}

export default Product;