import 'CSS/ShopStyling/ProductCard.css'
import {Link } from '@inertiajs/react';
import manita from 'PUBLIC/Images/control-inalambrico-para-xbox-360-original-reacondicionado-0-removebg-preview.png'



function ProductCard(){


    return(
        <div className="product-card">
            <div className="badge">Hot</div>

            <div className="product-tumb">
                <img src={manita} alt=""/>
            </div>

            <div className="product-details">
                <span className="product-catagory">Women,bag</span>

                <span className='prod_name'>
                    <Link href={route('shop.product')} method='get'>Women leather bag</Link>
                </span>

                <div className="product-bottom-details">
                    <div className="product-price">
                        <small className='discount_price'>$96.00</small>
                        <span className='prduct_price'>$230.99</span>
                    </div>

                    
                    <div className="product-links">
                        <a href="">
                            <i className='bx bxs-heart' ></i>
                        </a>
                        <a href="">
                            <i className='bx bxs-cart-add'></i>
                        </a>
                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default ProductCard;