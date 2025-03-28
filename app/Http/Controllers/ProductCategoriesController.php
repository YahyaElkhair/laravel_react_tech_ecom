<?php

namespace App\Http\Controllers;


use Exception;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ProductCategories;
use App\Http\Requests\UpdateProductCategoriesRequest;


class ProductCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = ProductCategories::latest()->get();
    

        return Inertia::render('Admin/Home/ProductCategories', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Home/CreateCategorie');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $req)
    {
        try{
            $params = $req->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'spesifications' => 'required|array',
            ]);

            $params['spesifications'] = json_encode($params['spesifications']);

            ProductCategories::create($params);

        } catch(Exception  $e){
            dd($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductCategories $productCategories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $pc = ProductCategories::find($id);

        return Inertia::render("Admin/Home/EditPC", [
            'pc' => $pc,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $req ,  $id)
    {   

        try{
            $params = $req->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'spesifications' => 'required|array',
            ]);
        
            $params['spesifications'] = json_encode($params['spesifications']);
        

            if(ProductCategories::find($id)->update($params) ){
                return redirect()->route('admin.productsCategories.index')->with('message', 'Category updated successfully!');

            }else{
                return redirect()->route('admin.productsCategories.index')->with('message', 'Category not updated successfully!');


            }
        
        } catch(Exception $e){
            dd($e);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductCategories $pc)
    {
        //
    }
}
