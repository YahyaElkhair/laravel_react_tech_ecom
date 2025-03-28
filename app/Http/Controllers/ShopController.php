<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class ShopController extends Controller
{


    public function index(){


        return Inertia::render('Store/Home/Index' , [

        ]);
    }



    public function dashboard(){


        return Inertia::render('Store/Home/Dashboard' , [

        ]);
    }





    public function productPage(){

        return Inertia::render('Store/Home/ProductPage' , [

        ]);
    }

    
}
