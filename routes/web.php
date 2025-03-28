<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductCategoriesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\SocialiteController;












// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });













Route::controller(SocialiteController::class)->group(function(){
    Route::get('auth/google' , 'googleLogin')->name('auth.google');
    Route::get('auth/google-callback' , 'googleAuth')->name("googleCallBack");
});

Route::middleware('auth')->group(function () {
    // Admin routing

    Route::prefix('admin')->name('admin.')->group(function () {

        // admin
        Route::controller(AdminController::class)->group(function(){
            Route::get('/' , 'index')->name('index');
        });
        
        // products categories
        Route::resource('productsCategories' , ProductCategoriesController::class);

        //Orders
        Route::resource('orders' , OrderController::class);

        // Products
        Route::resource('products', ProductController::class);

        // Users
        Route::resource('users' , UserController::class);
        
        Route::controller(AdminController::class)->group(function (){


        });
    });










    // Profile routing
    Route::controller(ProfileController::class)->group(function (){
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });












});




    // Home Page

    Route::controller(ShopController::class)->group(function(){
        

        Route::get('/' , 'index')->name('shop.index');
        Route::get('product' , 'productPage')->name('shop.product')->whereNumber('id');;

        Route::middleware(['auth'])->group(function(){
            Route::get('dashboard' , 'dashboard')->name('shop.dashboard');
            
        });


    });














require __DIR__.'/auth.php';
// drop DATABASE laravel_react_tech_ecom