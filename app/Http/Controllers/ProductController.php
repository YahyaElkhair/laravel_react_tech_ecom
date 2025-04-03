<?php

namespace App\Http\Controllers;

use DateTime;
use Exception;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use function Pest\Laravel\json;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Storage;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with(['seller' , 'category'])->latest()->get();
  
        
        return Inertia::render("Admin/Home/Products" , [

            "products" => $products,

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::latest()->get();

        return Inertia::render("Admin/Home/CreateProduct" , [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{


            $params = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'description' => 'required|string|max:10000',
                'specifications' => 'required|array',
                'category_id' => 'required|integer',
                'stock' => 'required|integer|min:0',
                'tags' => 'required|array',
                'images_paths' => 'required|array',
                'images_paths.*' => 'required|file|mimes:png,jpg,jpeg|max:10000',
                'thumbnail' => 'nullable|array',
                'thumbnail.*' => 'nullable|file|mimes:png,jpg,jpeg|max:10000',
                'video_url' => 'nullable|array',
                'video_url.*' => 'nullable|file|mimes:mp4,avi,mkv|max:125000',
                'discount' => 'nullable|numeric|between:0,100',
                'discount_start' => 'nullable|date|before_or_equal:discount_end',
                'discount_end' => 'nullable|date|after_or_equal:discount_start',
                'price_after_discount' => 'nullable|numeric|min:0',
                'is_active' => 'required|boolean',
                
            ]);
            
            $params['seller_id'] = Auth::id();
            $params['specifications'] = json_encode($params['specifications']);

            

            $params['images_paths'] = json_encode(HandleFilesController::uploadFiles($request->file('images_paths') , "product") );
            $vid_path = HandleFilesController::uploadFiles($request->file('video_url') , "product");
            $thumb_path = HandleFilesController::uploadFiles($request->file('thumbnail') , "product");

            $params['discount']/100;
            
            $params['thumbnail'] = $thumb_path;
            $params['video_url'] = $vid_path;
            Product::create($params);
            
            return redirect()->route('admin.products.index')->with('success', 'Product added successfully!');

        } catch(Exception $e){
            dd($e);
        }





    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {

        $product = Product::with('seller')->where('seller_id' , $product->id)->first();
        
        return Inertia::render("Admin/Home/Product", [
            'product' => $product,
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = Category::latest()->get();

        return Inertia::render("Admin/Home/EditProduct" , [
            'categories' => $categories,
            'product' => $product

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $req , Product $product)
    {        

        try{
            $params = $req->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'description' => 'required|string|max:10000',
                'specifications' => 'required|array',
                'category_id' => 'required|integer',
                'stock' => 'required|integer|min:0',
                'tags' => 'required|array',
                'images_paths' => $req->hasFile('images_paths') ? 'required|array' : '',
                'images_paths.*' => $req->hasFile('images_paths') ? 'file|mimes:png,jpg,jpeg|max:10000' : '',
                'thumbnail' => $req->hasFile('thumbnail') ? 'file|mimes:png,jpg,jpeg|max:10000' : '',
                'video_url' => $req->hasFile('video_url') ? 'file|mimes:mp4,avi,mkv|max:125000' : '',
                'discount' => 'nullable|numeric|between:0,100',
                'discount_start' => 'nullable|date|before_or_equal:discount_end',
                'discount_end' => 'nullable|date|after_or_equal:discount_start',
                'price_after_discount' => 'nullable|numeric|min:0',
                'is_active' => 'required',
                
            ]);

            
            if($req->hasFile('images_paths')){
                $params['images_paths'] = json_encode(HandleFilesController::uploadFiles($req->file('images_paths') , "product") );

            }

            if($req->hasFile('thumbnail') ){
                $params['thumbnail'] = HandleFilesController::uploadFiles($req->file('thumbnail') , "product");
    
            }

            if($req->hasFile('video_url') ){
                $params['video_url'] = HandleFilesController::uploadFiles($req->file('video_url') , "product");

            }



            $params['seller_id'] = Auth::id();
            $params['specifications'] = json_encode($params['specifications']);

            $params['discount']/100;


            $product->update($params);

            return redirect()->route('admin.products.index')->with('success', 'Product updated successfully!');

        
        } catch(Exception $e){
            dd($e);
            return redirect()->route('admin.products.index')->with('error', 'Error product not updated successfully!');

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try{
            $product->delete();
            return redirect()->route('admin.products.index')->with('success' , 'Product deleted successfully!');
        } catch(Exception $e){
            dd($e);
        }
    }
}
