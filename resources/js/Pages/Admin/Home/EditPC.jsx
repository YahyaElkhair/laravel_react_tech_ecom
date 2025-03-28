import AdminLayout from "../Layout/AdminLayout";

import 'CSS/AdminStyling/ProductCategories.css';
import 'CSS/AdminStyling/CreateForm.css';
import 'CSS/AdminStyling/AddBtn.css';

import { Head, Link, useForm  } from '@inertiajs/react';




function EditPC({pc}){
    const {data, setData, put, processing, errors, reset } = useForm({
        id: pc.id,
        name: pc.name,
        description: pc.description,
        spesifications: JSON.parse(pc.spesifications) ,
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();
        put(route('admin.productsCategories.update', pc), {
            onSuccess: () => reset(),
        });

    }

    return(

        <AdminLayout>
            <Head title="Create categorie"/>
            <div className="dash-content">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={data.name} placeholder="Enter categorie name" required onChange={(e) => setData('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" value={data.description} placeholder="Enter categorie description" required onChange={(e) => setData('description', e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spesifications">Specifications</label>
                        <input type="text" id="spesifications" name="spesifications" value={data.spesifications.join(",")} placeholder="Enter categorie specifications (comma separated)" required onChange={(e) => setData('spesifications', e.target.value.split(',')) } /> 
                    </div>
                    <div className="form-actions">
                        <button type="submit" disabled={processing} >Update categorie</button>
                        <button type="reset" className="reset-btn">Reset</button>
                    </div>
                </form>
                
            </div>
        </AdminLayout>
    )

}

export default EditPC;