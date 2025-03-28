import { Head, Link, useForm  } from '@inertiajs/react';
import 'CSS/AdminStyling/CreateForm.css';
import AdminLayout from "../Layout/AdminLayout";


function CreateCategorie () {

    const {data, setData, post, processing, errors, reset } = useForm({
        name:'',
        description:'',
        spesifications:[],
    });


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(data.spesifications);
        post(route('admin.productsCategories.store'));

    }

    return(

        <AdminLayout>
            <Head title="Create categorie"/>
            <div className="dash-content">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter categorie name" required onChange={(e) => setData('name', e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" placeholder="Enter categorie description" required onChange={(e) => setData('description', e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="spesifications">Specifications</label>
                        <input type="text" id="spesifications" name="spesifications" placeholder="Enter categorie specifications (comma separated)" required onChange={(e) => setData('spesifications', e.target.value.split(',')) } /> 
                    </div>
                    <div className="form-actions">
                        <button type="submit" disabled={processing} >Save categorie</button>
                        <button type="reset" className="reset-btn">Reset</button>
                    </div>
                </form>
                
            </div>
        </AdminLayout>
    )
}

export default CreateCategorie;