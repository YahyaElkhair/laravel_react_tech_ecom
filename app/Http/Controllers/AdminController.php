<?php

namespace App\Http\Controllers;

use App\Models\RecentActivities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $recent_activities = RecentActivities::with('user')->latest()->get();

        return Inertia::render('Admin/Home/AdminDashboard', [
            'recent_activites' => $recent_activities,
        ]);
        
    }



}
