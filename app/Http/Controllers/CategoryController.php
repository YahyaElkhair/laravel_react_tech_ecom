<?php

namespace App\Http\Controllers;


use App\Models\Category;
use Exception;
use Inertia\Inertia;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::latest()->get();
    

        return Inertia::render('Admin/Home/Categories', [
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
                'specifications' => 'required|array',
            ]);

            $params['specifications'] = json_encode($params['specifications']);


            Category::create($params);
            return redirect()->route('admin.categories.index')->with('success', 'Category created successfuly!');

        } catch(Exception  $e){
            return redirect()->route('admin.categories.index')->with('error', 'Category not created successfuly!');

        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {

        return Inertia::render("Admin/Home/EditCategory", [
            'category' => $category,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $req , Category $category)
    {


        try{
            $params = $req->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'specifications' => 'required|array',
            ]);
        
            $params['specifications'] = json_encode($params['specifications']);
        
            $category->update($params);
            return redirect()->route('admin.categories.index')->with('success', 'Category updated successfully!');

        
        } catch(Exception $e){
            return redirect()->route('admin.categories.index')->with('error', 'Error category not updated successfully!');

        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        try{
            $category->delete();
            return redirect()->route('admin.categories.index')->with('success', 'Category deleted successfully!');

        } catch(Exception $e){
            return redirect()->route('admin.categories.index')->with('error', 'Category not deleted successfully!');

        }
    }
}
