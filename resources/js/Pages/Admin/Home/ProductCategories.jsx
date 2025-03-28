import AdminLayout from "../Layout/AdminLayout";
import AddBtn from "../Components/AddBtn";
import ActionLink from "../Components/ActionLink";

import 'CSS/AdminStyling/ProductCategories.css';
import 'CSS/AdminStyling/Table.css';
import 'CSS/AdminStyling/AddBtn.css';

import { Head , Link } from '@inertiajs/react';

function ProductCategories({categories}){



    let categories_table_body = categories.map((c, i) => {

        let spesifications = JSON.parse(c.spesifications).map((s,x) =>{
            return(
                <ul key={x}>
                    <li>
                        {s}
                    </li>
                </ul>
            )
        });

        // categories table body
        return (
            <tr key={i}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td>
                    {spesifications}
                </td>
                <td>
                    <div className="action-links-container">
                        <ActionLink type='edit' link_text='Edit' link_to='admin.productsCategories.edit' link_args={c.id} />
                        <ActionLink type='del' link_text='Delete' link_to='admin.productsCategories.destroy' link_args={c.id} />
                    </div>
                </td>
            </tr>
        );
    });











    return(

        <AdminLayout isEnableSearch={true} search_placeholder='Search for category...'>
            <Head title="Categories"/>
            <div className="dash-content">
                {
                    categories.length > 0 && 
                    <>
                        <table className="table-fill">
                            <caption>List of categories</caption>
                            <thead>
                                <tr>
                                    <th className="text-left">ID</th>
                                    <th className="text-left">Name</th>
                                    <th className="text-left">Description</th>
                                    <th className="text-left">Specifications</th>
                                    <th className="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                {categories_table_body}
                            </tbody>
                        </table>
                        <AddBtn link_to='admin.productsCategories.create'/>

                    </>

                }

                {categories.length == 0
                    && 
                    <>
                        <h1>No categorie existe</h1>
                        <AddBtn link_to='admin.productsCategories.create'/>
                    </>
                
                }

            </div>


        </AdminLayout>
    )
}

export default ProductCategories;