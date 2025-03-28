<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductCategories;
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
        $products_creator = Product::with('createdBy')->latest()->get();

        return Inertia::render("Admin/Home/Products" , [
            "products_creator" => $products_creator,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = ProductCategories::latest()->get();

        

        
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
                'category' => 'required|string|max:255',
                'stock' => 'required|integer|min:0',
                'tags' => 'required|array', // Ensure `tags` is an array
                'tags.*' => 'string', // Validate each tag as a string
                'images_paths' => 'required|array', // Ensure `images_paths` is an array
                'images_paths.*' => 'required|file|mimes:png,jpg,jpeg|max:10000', // Validate each file
                'thumbnail' => 'nullable|array',
                'thumbnail.*' => 'nullable|file|mimes:png,jpg,jpeg|max:10000',
                'video_url' => 'nullable|array',
                'video_url.*' => 'nullable|file|mimes:mp4,avi,mkv|max:125000',
                'discount' => 'nullable|numeric|between:0,100',
                'discount_start' => 'nullable|date|before_or_equal:discount_end',
                'discount_end' => 'nullable|date|after_or_equal:discount_start',
                'price_after_discount' => 'nullable|numeric|min:0',
                'is_active' => 'required',
    
    
            ]);
            
    
            $imgs_paths = [];
            foreach(HandleFilesController::uploadFiles($request->file('images_paths') , "product") as $x){
                array_push($imgs_paths , Storage::url($x));
            }

            $vid_path = Storage::url(HandleFilesController::uploadFiles($request->file('video_url') , "product"));
            $thumb_path = Storage::url(HandleFilesController::uploadFiles($request->file('thumbnail') , "product"));

            $params['discount']/100;
            
            $params['images_paths'] = json_encode($imgs_paths);
            $params['thumbnail'] = $thumb_path;
            $params['video_url'] = $vid_path;
            $params['created_by'] = Auth::id();
            Product::create($params);

        } catch(Exception $e){
            dd($e);
        }





    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {

        $product = Product::with('createdBy')->where('id' , $product->id)->first();
        
        return Inertia::render("Admin/Home/Product", [
            'product' => $product,
        ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try{
            $product->delete();
            return redirect()->route('admin.products.index')->with(['message' => 'Prodect deleted succefuly']);
        } catch(Exception $e){
            dd($e);
        }
    }
}
