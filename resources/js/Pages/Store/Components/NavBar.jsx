import 'CSS/ShopStyling/ShopLayout.css'
import 'CSS/ShopStyling/NavBar.css'
import 'CSS/login.css'

import { Head, Link, useForm } from '@inertiajs/react';
import {useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';


import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import googleLogo from 'PUBLIC/Images/google.png'






function NavBar(){
    const {status , canResetPassword , auth} = usePage().props;


    // sidebar open close

    const [navLinksLeftPosition , setNavLinksLeftPosition] = useState('-100%');

    useEffect(() => {
        let navLinks = document.querySelector(".nav-links");

        navLinks.style.left = navLinksLeftPosition;
    }, [navLinksLeftPosition])




    // search-box open close js code
    let navbar = document.querySelector(".navbar");
    
    const handlLoginBox = () => {
        navbar.classList.toggle("showLoginBox");
    }



    const handlCartBox = () => {
        navbar.classList.toggle("showCartBox");

    }


    const { data, setData, post, processing, errors, reset } = useForm({
        email: 'zizok396@gmail.com',
        password: 'azazazaz',
        remember: false,
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };




    // user favories

    const handlFavoritesBox = () => {

    }










    
    return(
        <nav>
            <div className="navbar">
                <i className='bx bx-menu' onClick={() => setNavLinksLeftPosition('0')}></i>

                <div className="logo">
                  <Link href={route('shop.index')}>CodingLab</Link>
                </div>

                <div className="nav-links">
                    <div className="sidebar-logo">
                        <span className="logo-name">CodingLab</span>
                        <i className='bx bx-x' onClick={() => setNavLinksLeftPosition('-100%')}></i>
                    </div>
                    
                    <ul className="links">

                        <li>
                            <a href="#">Categories</a>
                            <i className='bx bxs-chevron-down htmlcss-arrow arrow' onClick={() => document.querySelector(".nav-links").classList.toggle("show1")}></i>
                            <ul className="Categories-sub-menu sub-menu">
                                <li>
                                    <Link href={route('shop.index')}>Latops</Link>
                                </li>
                                <li>
                                    <Link href={route('shop.index')}>PCs</Link>
                                </li>
                                <li>
                                    <Link href={route('shop.index')}>TVs</Link>
                                </li>
                                <li>
                                    <Link href={route('shop.index')}>Mouses</Link>
                                </li>

                                <li className="more">
                                    <span><a href="#">More</a>
                                        <i className='bx bxs-chevron-right arrow more-arrow' onClick={() => document.querySelector(".nav-links").classList.toggle("show2")}></i>
                                    </span>
                                    <ul className="more-sub-menu sub-menu">
                                        <li>
                                            <Link href={route('shop.index')}>More....</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <input type="text" className='search-inp' placeholder="Search for product" />
                        </li>

                        <li>
                            
                        </li>

                    </ul>
                </div>


                <div className='left-nav-container'>
                    <div className="left-nav-box">
                        <i className='bx bx-heart' onClick={handlFavoritesBox}></i>
                        <div className="input-box cart-box">
                        </div>
                    </div>



                    <div className="left-nav-box">
                        <i className='bx bx-cart-alt' onClick={handlCartBox}></i>
                        <div className="input-box cart-box">
                        </div>
                    </div>
                    







                    {auth.user &&
                        <div className="left-nav-box">
                                <Link href={route('shop.index')} className='profile-link'>Profile</Link>
                                <Link method='post' href={route('logout')} className='profile-link'>Logout</Link>

                            
                            
                        </div>
                    }


                    {!auth.user &&
                        <div className="left-nav-box">


                            <i className='bx bx-user' onClick={handlLoginBox}></i>
                            <div className="input-box login-box">

                                {status && (
                                    <div className="mb-4 text-sm font-medium text-green-600">
                                        {status}
                                    </div>
                                )}

                                <div className='social-auth-container'>
                                    <div className='google-auth'>
                                        <img src={googleLogo} alt="google logo" />

                                        <a href={route('auth.google')} className='google-auth-link'>
                                            Login with google account
                                        </a>
                                    </div>
                                    <span className='auth-separator'>Or</span>
                                </div>


                                <form onSubmit={submit}>
                                    <div>
                                        <InputLabel className='input-label' htmlFor="email" value="Email" />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full login-inp"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />

                                        <InputError message={errors.email} className="mt-2" />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel className='input-label' htmlFor="password" value="Password" />

                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full login-inp"
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                        />

                                        <InputError message={errors.password} className="mt-2" />
                                    </div>

                                    <div className="mt-4 block">
                                        <label className="flex items-center">
                                            <Checkbox
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData('remember', e.target.checked)
                                                }
                                            />
                                            <span className="ms-2 text-sm text-gray-600 input-label ">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div className="mt-4 l-container">

                                        <PrimaryButton className="ms-4 login-btn" disabled={processing}>
                                            Log in
                                        </PrimaryButton>

                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')}
                                                className="forgot-pass-link"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}
                                        <Link
                                                href={route('register')}
                                                className="forgot-pass-link"
                                        >
                                            Register
                                        </Link>
                                    </div>





                                </form>

                            </div>
                        </div>
                   
                    }

                </div>


            </div>
        </nav>        
    )


}

export default NavBar;