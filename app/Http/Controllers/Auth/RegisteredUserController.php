<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Seller;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Models\RecentActivities;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $randomColor = '';
        do {
            $randomColor = substr(str_shuffle('ABCDEF0123456789'), 0, 6);
        } while (strtolower($randomColor) === 'ffffff');

        $user_type = $request->user_type;
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'avatar_path' => "https://ui-avatars.com/api/?name=$request->name&background=$randomColor&color=ffff&length=2&bold=true&format=svg",
            'role' => $user_type,
            'gender' => $request->gender,
        ]);
        

        if($user){
            RecentActivities::create([
                'user_id' => $user->id,
                'activity' => 'New registration to the wbesite',
                'activity_type' => 'registration',
            ]);

            
            $user_type == "customer" ?
            Customer::create([
                'user_id' => $user->id,
            ]) :
            Seller::create([
                'user_id' => $user->id,
            ]);

            event(new Registered($user));
            Auth::login($user);
            return redirect(route('verification.notice'));

        };
        
        return redirect(route('login'));

    }
}
