

import NavBar from '../Components/NavBar';
import 'CSS/ShopStyling/ShopLayout.css'

function ShopLayout({children}){


    
    return(
        <>
            <NavBar />
            


            <main>
                {children}
            </main>

            {/* <div class="cart-overlay" id="cartOverlay">
                <div class="cart-header">
                    <h2>Your Shopping Cart</h2>
                    <button class="close-cart">&times;</button>
                </div>

                <div class="cart-items">
                    <div class="cart-item">
                        <img src="https://via.placeholder.com/200" alt="Product Image"/>
                        <div class="item-details">
                            <h4>UltraBook Pro X1</h4>
                            <p class="price">$2,499.00</p>
                            <div class="quantity-control">
                                <button class="qty-minus">-</button>
                                <span class="quantity">1</span>
                                <button class="qty-plus">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="cart-item">
                        <img src="https://via.placeholder.com/200" alt="Product Image"/>
                        <div class="item-details">
                            <h4>Wireless Noise-Canceling Headphones</h4>
                            <p class="price">$349.00</p>
                            <div class="quantity-control">
                                <button class="qty-minus">-</button>
                                <span class="quantity">2</span>
                                <button class="qty-plus">+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-summary">
                    <div class="total-section">
                        <h3>Total: $3,197.00</h3>
                        <button class="checkout-btn">
                            Secure Checkout
                            <i class="fas fa-lock"></i>
                        </button>
                    </div>
                </div>
            </div>


            <main>



            </main>
            <footer>
                <div class="footer-content">
                    <h2>Tech E-Commerce</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <div class="footer-bottom">
                        <p>&copy; 2025 Tech E-Commerce | All rights reserved.</p>
                        <p>Made with <span id="love">❤️</span> by Your Company</p>
                    </div>
                </div>
            </footer> */}
        
        
        </>
    )
}



export default ShopLayout;