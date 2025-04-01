import AdminLayout from "../Layout/AdminLayout";
import 'CSS/AdminStyling/Table.css';
import 'CSS/AdminStyling/CreateForm.css';
import { Head, useForm} from '@inertiajs/react';
import { useEffect, useState} from 'react';

function CreateProduct({categories}){




    const {data, setData, post, processing, errors, reset } = useForm({
        name:null,
        price:null,
        description:null,
        specifications:[],
        category_id:categories[0].id,
        stock:null,
        tags:[],
        images_paths:[],
        thumbnail:null,
        video_url:null,
        discount:null,
        discount_start:null,
        discount_end:null,
        price_after_discount:null,
        is_active:"active",
    });
    const handleRadioChange = (e) => {
        setData('is_active' , e.target.value);
    };

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        post(route('admin.products.store'));
        console.log(data.images_paths);

    }

    useEffect(() => {

    }, [data.images_paths])


    // get categories data
    let cat_list = [];
    let [category , setCategory] = useState(null);
    if(categories.length > 0){
        cat_list = categories.map((c , i) => {
            return(
                <option value={c.name} id={c.id} key={`${c.name}-${i}`}>
                    {c.name}
                </option>
            )
        });

        [category , setCategory] = useState(categories[0].name);

        useEffect(() =>{
            handleCatSelect(category);
        } , [category]);

    }



    const [specifications , setSpecifications] = useState([]);



    const handleSPInpChange = (e) => {
        let s_key = e.target.name;
        let val = e.target.value;

        const newObj = {
            [s_key]: val
        }

        if(val != ''){


            setData((prevData) => {
                let prevSp = [...prevData.specifications];
                let obj_index = prevSp.findIndex(obj => obj.hasOwnProperty(s_key));

                if(obj_index !== -1){
                    prevSp[obj_index] = newObj;

                }else{
                    prevSp.push(newObj);
                }

                return {...prevData , specifications: prevSp}

            })
        }

        
    };
    


    const handleCatSelect = (selected_cat) =>{
        let selected_cat_data = categories.filter((c) => {
            return c.name == selected_cat;
        })


        selected_cat_data.map((c) => {
            let cat_sp = JSON.parse(c.specifications);
            setSpecifications([
                cat_sp.map((s) =>{
                    return(
                        <>
                            <label htmlFor={s}> {s} : </label>
                            <input type="text" name={s} id={s} onBlur={handleSPInpChange} />
                        </>
                    )
                })
            ])

        });

        setData('category_id',selected_cat_data[0].id);

    }




    const handleImagesUpload = (e) => {
        const file = e.target.files;

        setData(prevData => {
            let prevImages = [...prevData.images_paths];


            prevImages.push(file[0]);

            return {...prevData , images_paths: prevImages}
        });

    }




    return (
        <AdminLayout>
            <Head title="Create product"/>

            <div className="dash-content">
                <h2 className="text-2xl text-center font-bold text-gray-800 mt-5 mb-5">Create new product</h2>
                <div className="form-container">
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data">

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter product name" required onChange={(e) => setData('name', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" name="price" placeholder="Enter product price" step="1" required onChange={(e) => setData('price', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" placeholder="Enter product description" rows="4" required  onChange={(e) => setData('description', e.target.value)}></textarea>
                        </div>


                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category" name="category" value={category} required onChange={(e) => { setData('category_id', e.target.id) ; setCategory(e.target.value) } }>
                                <option value="" disabled >Select a category</option>
                                {cat_list}
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="specifications">Specifications</label>
                            <div className="specifications_container">
                                {specifications}
                            </div>
                            {/* <textarea id="specifications" name="specifications" placeholder="Enter product specifications" rows="4" required onChange={(e) => setData('specifications', e.target.value.split(' '))} ></textarea> */}
                        </div>

                        <div className="form-group">
                            <label htmlFor="stock">Stock</label>
                            <input type="number" id="stock" name="stock" placeholder="Enter stock quantity" required  onChange={(e) => setData('stock', e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input type="text" id="tags" name="tags" placeholder="Enter tags (comma separated)" required onChange={(e) => setData('tags', e.target.value.split(',')) } /> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="images_paths">Images</label>
                            <input type="file" id="images_paths" name="images_paths" multiple accept=".png,.jpg,.jpeg"  required  onChange={handleImagesUpload} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="thumbnail">Thumbnail</label>
                            <input type="file" id="thumbnail" name="thumbnail" accept=".png,.jpg,.jpeg" onChange={(e) => setData('thumbnail', e.target.files)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="video_url">Video</label>
                            <input type="file" id="video_url" name="video_url" accept="mp4,avi,mkv" placeholder="Select video " onChange={(e) => setData('video_url', e.target.files)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="discount">Discount (%)</label>
                            <input type="number" id="discount" name="discount" placeholder="Enter discount %" step="0.01" onChange={(e) => setData('discount', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="discount_start">Discount Start</label>
                            <input type="datetime-local" id="discount_start" name="discount_start" onChange={(e) => setData('discount_start', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="discount_end">Discount End</label>
                            <input type="datetime-local" id="discount_end" name="discount_end" onChange={(e) => setData('discount_end', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price_after_discount">Price After Discount</label>
                            <input type="number" id="price_after_discount" name="price_after_discount" placeholder="Auto-calculated" readOnly onChange={(e) => setData('price_after_discount', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Active</label>
                            <div className="radio-container">
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" name="is_active" id="yes" value="active" checked={data.is_active === "active"} onChange={handleRadioChange} />

                                <label htmlFor="no">No</label>
                                <input type="radio" name="is_active" id="no" value="disabled" checked={data.is_active === "disabled"} onChange={handleRadioChange} />
                            </div>
                        </div>
                        <div className="form-actions">
                            <button type="submit" disabled={processing} >Save Product</button>
                            <button type="reset" className="reset-btn">Reset</button>
                        </div>
                    </form>
                </div>

            </div>
            
        </AdminLayout>
    )
}

export default CreateProduct;