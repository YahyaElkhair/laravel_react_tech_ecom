import manita from 'PUBLIC/Images/control-inalambrico-para-xbox-360-original-reacondicionado-0-removebg-preview.png'
import 'CSS/ShopStyling/ProductPage.css'
import { Head } from '@inertiajs/react';

import ShopLayout from '../Layout/ShopLayout';

function ProductPage({product}) {



    return(
        <ShopLayout>
            <Head title='Product Page'/>

            <div className='prod_container'>
                <p className='prod_name'>IPHONE PRO MAX</p>

                <div className='prod_top'>

                    <div className='prod_top_left'>
                        <img className='left_prod_img' src={manita} alt="product image" />
                        <img className='left_prod_img' src={manita} alt="product image" />
                        <img className='left_prod_img' src={manita} alt="product image" />
                    </div>

                    <img className='main_prod_img' src={manita} alt="product image" />
                    
                    <div className='prod_top_right'>
                        <div className='prod_desc'>
                            <p className='prod_desc_title'>Description</p>
                            <p className='prod_descriptions'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam harum tenetur asperiores. Possimus ab quasi eum voluptas deserunt sit dicta modi, ipsa temporibus provident, culpa qui recusandae dolores tempora!</p>
                        </div>

                        <div className='prod_rating'>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star-half'></i>
                        </div>

                        <div>
                            <p className='prod_quantity_title'>Quantity</p>
                            <div className='prod_quantity'>
                                <label htmlFor="quantity">-</label>
                                <input type="number" name="quantity" id="quantity" />
                                <label htmlFor="quantity">+</label>
                            </div>
                        </div>

                        <div className='prod_cart'>
                            <i className='bx bxs-heart add_fav_btn'  ></i>

                            <button className='add_cart_btn'>
                                <i class='bx bxs-cart-add'></i>
                                Add to cart
                                
                            </button>
                        </div>

                    </div>




                </div>

            </div>
        </ShopLayout>
    )
}

export default ProductPage;