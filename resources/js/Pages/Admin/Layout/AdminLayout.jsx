import { Link } from '@inertiajs/react';
import logo from 'PUBLIC/images/logo.png';
import profile from 'PUBLIC/images/profile.jpg';
import React, { useEffect, useState } from 'react';
import 'CSS/AdminStyling/AdminDashboard.css';
import AddBtn from "../Components/AddBtn";

function AdminLayout({children , isEnableSearch, search_placeholder}){


    const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark');
    const [sidebarClosed, setSidebarClosed] = useState(localStorage.getItem('status') === 'close');



    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        localStorage.setItem('mode', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    useEffect(() => {
        if (sidebarClosed) {
            document.querySelector('nav').classList.add('close');
        } else {
            document.querySelector('nav').classList.remove('close');
        }
        localStorage.setItem('status', sidebarClosed ? 'close' : 'open');
    }, [sidebarClosed]);

    const handlNavicon = () => {
        setSidebarClosed(!sidebarClosed); 


    }
    

    return(
        <div>
            <nav>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src={logo} alt="page logo" />
                    </div>
                    <span className="logo_name">Dashboard</span>


                </div>
                <div className="menu-items">
                    
                    <ul className="nav-links">
                        <i class='bx bx-menu sidebar-toggle' onClick={handlNavicon}></i>


                        <li>
                            <Link href={route('admin.index')}>
                                <i className="uil uil-estate"></i><span className="link-name">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.users.index')}>
                                <i className="uil uil-user"></i><span className="link-name">Users</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.products.index')}>
                                <i className="uil uil-box"></i><span className="link-name">Products</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.orders.index')}>
                                <i className="uil uil-shopping-cart-alt"></i><span className="link-name">Orders</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={route('admin.productsCategories.index')}>
                                <i className="uil uil-list-ul"></i><span className="link-name">Categories</span>
                            </Link>
                        </li>


                    </ul>

                    <ul className="logout-mode">

                        <li>
                            <Link method='post' href={route('logout')} className='logout_link'>
                                <i className="uil uil-signout"></i><span className="link-name">Logout</span>
                            </Link>

                        </li>

                        <li className="mode">
                            <a href="#" >
                                <i className="uil uil-moon"></i><span className="link-name">Dark Mode</span>
                            </a>
                            <div className="mode-toggle" >
                                <span className="switch" onClick={() => setDarkMode(!darkMode)}></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="dashboard">
                <div className="top">

                    {isEnableSearch && 
                    
                        <div className="search-box">
                            <i className="uil uil-search"></i>
                            <input type="text" placeholder={search_placeholder}/>
                        </div>                     
                    }


                    <div className='admin_notifications_container'>

                    </div>

                    <img src={profile} alt="profile avatar" />

                </div>
                {children}

            </section>


        </div>
    )
}

export default AdminLayout;