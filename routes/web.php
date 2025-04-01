<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
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












// google auth routing
Route::controller(SocialiteController::class)->group(function(){
    Route::get('auth/google' , 'googleLogin')->name('auth.google');
    Route::get('auth/google-callback' , 'googleAuth')->name("googleCallBack");
});


// Admin routing
Route::middleware(['auth' , 'role:admin'])->group(function () {

    Route::prefix('admin')->name('admin.')->group(function () {

        // admin home
        Route::controller(AdminController::class)->group(function(){
            Route::get('/' , 'index')->name('index');
        });
        
        // products categories
        Route::resource('categories' , CategoryController::class);

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
    // Route::controller(ProfileController::class)->group(function (){
    //     Route::get('/profile', 'edit')->name('profile.edit');
    //     Route::patch('/profile', 'update')->name('profile.update');
    //     Route::delete('/profile', 'destroy')->name('profile.destroy');
    // });

});




// store routing

Route::middleware( ['role:customer'])->name('shop.')->group(function () {

    Route::controller(ShopController::class)->group(function(){

        Route::get('/' , 'index')->name('index');
        Route::get('product' , 'productPage')->name('product')->whereNumber('id');
    

        Route::middleware(['auth'])->group(function(){
            Route::get('dashboard' , 'dashboard')->name('dashboard');

        });
    
    
    });

});













require __DIR__.'/auth.php';
