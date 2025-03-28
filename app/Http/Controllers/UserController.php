<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\RecentActivities;




class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->get();
        return Inertia::render('Admin/Home/Users', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $req)
    {

        $user_activities = RecentActivities::with(['user'])->whereHas('user' , function($q) use ($req){
            $q->where('id' , $req->user);
        })->get();


        return Inertia::render("Admin/Home/User" , [
            "user_activities" => $user_activities,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $req)
    {
        if(User::destroy($req->id) ) {
            return redirect()->route('admin.users')->with([
                'message' => 'User deleted',
            ]);
        }
        return redirect()->route('admin.users')->with([
            'message' => 'User not deleted',
        ]);
    }
}
