

import NavBar from '../Components/NavBar';
import 'CSS/ShopStyling/ShopLayout.css'

function ShopLayout({children}){


    
    return(
        <>
            <NavBar />
            


            <main>
                {children}
            </main>

            {/* <div className="cart-overlay" id="cartOverlay">
                <div className="cart-header">
                    <h2>Your Shopping Cart</h2>
                    <button className="close-cart">&times;</button>
                </div>

                <div className="cart-items">
                    <div className="cart-item">
                        <img src="https://via.placeholder.com/200" alt="Product Image"/>
                        <div className="item-details">
                            <h4>UltraBook Pro X1</h4>
                            <p className="price">$2,499.00</p>
                            <div className="quantity-control">
                                <button className="qty-minus">-</button>
                                <span className="quantity">1</span>
                                <button className="qty-plus">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="cart-item">
                        <img src="https://via.placeholder.com/200" alt="Product Image"/>
                        <div className="item-details">
                            <h4>Wireless Noise-Canceling Headphones</h4>
                            <p className="price">$349.00</p>
                            <div className="quantity-control">
                                <button className="qty-minus">-</button>
                                <span className="quantity">2</span>
                                <button className="qty-plus">+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart-summary">
                    <div className="total-section">
                        <h3>Total: $3,197.00</h3>
                        <button className="checkout-btn">
                            Secure Checkout
                            <i className="fas fa-lock"></i>
                        </button>
                    </div>
                </div>
            </div>


            <main>



            </main>
            <footer>
                <div className="footer-content">
                    <h2>Tech E-Commerce</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Tech E-Commerce | All rights reserved.</p>
                        <p>Made with <span id="love">❤️</span> by Your Company</p>
                    </div>
                </div>
            </footer> */}
        
        
        </>
    )
}



export default ShopLayout;