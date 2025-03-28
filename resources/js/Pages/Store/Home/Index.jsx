import { Head } from '@inertiajs/react';
import ShopLayout from '../Layout/ShopLayout';
import ProductCard from '../Components/ProductCard';
import 'CSS/ShopStyling/Index.css';
import { useRef } from 'react';

function Index({ products }) {


    const scrollRefs = useRef([]);

    const scrollLeft = (index) => {
        if (scrollRefs.current[index]) {
            scrollRefs.current[index].scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = (index) => {
        if (scrollRefs.current[index]) {
            scrollRefs.current[index].scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const categories = [
        "For you",
        "Top discounts",
        "Best month sells",
        "PCs",
        "Laptops",
        "Recently viewed products"
    ];

    return (
        <ShopLayout>
            <Head title="Home Page" />

            <div className="main_products_containers">
                <h1>Main products scroller</h1>
            </div>

            {categories.map((category, index) => (
                <div className="b_p_container" key={index}>
                    <p id={`p${index + 1}`}>{category}</p>

                    <i className="bx bx-left-arrow-alt left_scroll_btn" onClick={() => scrollLeft(index)} ></i>

                    <div className="random_prod_container" ref={(el) => (scrollRefs.current[index] = el)} >
                        {Array(100).fill(<ProductCard />)}
                    </div>

                    <i className="bx bx-right-arrow-alt right_scroll_btn" onClick={() => scrollRight(index)}></i>
                </div>
            ))}

            <i className="bx bx-up-arrow-alt up_scroll_btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}></i>
        </ShopLayout>
    );
}

export default Index;
