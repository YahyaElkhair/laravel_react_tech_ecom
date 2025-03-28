import AdminLayout from "../Layout/AdminLayout";
import AddBtn from "../Components/AddBtn";
import ActionLink from "../Components/ActionLink";

import 'CSS/AdminStyling/AdminUserDetails.css';
import 'CSS/AdminStyling/Table.css';
import 'CSS/AdminStyling/AddBtn.css';

import 'CSS/AdminStyling/Products.css';
import { Link } from "@inertiajs/react";

function Products({products_creator}){


    let products_table_body = products_creator.map((p, i) => {


        // get prodcuts specifications


        let sp_list = p.specifications.map((s , y ) =>{

            let keys = Object.keys(s);
            let returned_sp_list = [];
            keys.forEach((k) => {
                returned_sp_list.push(
                    <li>
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
        let prod_imgs_paths = JSON.parse(p.images_paths);
        let prod_imgs_list = prod_imgs_paths.map((e , x) => {
            return(

                <li key={x}>
                    <img src={e} alt="product image" className="prod_img" />
                </li>

            )
        })
        

        // product table body
        return (
            <tr key={i}>
                <td>{p.id}</td>
                <td>{p.created_by.email}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.tags.join(', ')}</td>
                <td>{p.description}</td>
                <td>
                    <ul className="sp_ul">
                        {sp_list}
                    </ul>
                </td>
                <td>{p.stock}</td>
                <td>
                    {p.thumbnail ? (
                        <img src={p.thumbnail} alt="Thumbnail" className="prod_img" />
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
                        {p.video_url ? (
                            <video controls >
                                <source src={p.video_url} type="video/mp4" />
                            </video>
                        ) : (
                            'No video'
                        )}
                    </div>
                </td>
                <td>{p.rating}</td>
                <td>{p.views}</td>
                <td>{p.is_active ? 'Active' : 'Inactive'}</td>
                <td>{p.discount ? `${p.discount}%` : 'No discount'}</td>
                <td>{p.price_after_discount ? `$${p.price_after_discount}` : 'N/A'}</td>
                <td>
                    <div className="action-links-container">
                        <ActionLink type='infos' link_text='More details' link_to='admin.products.show' link_args={p.id} />
                        <ActionLink type='del' link_text='Delete' link_to='admin.products.destroy' link_args={p.id} />
                    </div>
                </td>
            </tr>
        );
    });
    

    return(
        <AdminLayout isEnableSearch={true} search_placeholder='Search for product...'>
            <div className="dash-content">
                {
                    products_creator.length > 0 && 
                    

                    <>
                        <table className="table-fill">
                            <caption>List of products</caption>
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
                                {products_table_body}
                            </tbody>
                        </table>


                        <AddBtn link_to='admin.products.create'/>

                    </>

                }

                {products_creator.length == 0
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

export default Products;