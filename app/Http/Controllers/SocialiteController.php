<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use App\Models\Client;
use App\Models\RecentActivities;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Laravel\Socialite\Facades\Socialite;


class SocialiteController extends Controller
{
    public function googleLogin(){
        return Socialite::driver('google')->redirect();
    }

    public function googleAuth(){


        try{
            $googleUser = Socialite::driver('google')->user();

            $user = User::where('google_id' , $googleUser->id)->first();
            if($user){
                Auth::login($user);
                return redirect()->route("admin.dashboard");
    
            }else{
                $newUser = User::create([
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'password' => Hash::make('password@google'),
                    'google_id' => $googleUser->id,
                    'avatar_path' => $googleUser->avatar,
                    'email_verified_at' => Date::now(),
                ]);

                
                Client::create([
                    'user_id' => $newUser->id,
                ]);


                if($newUser){
                    RecentActivities::create([
                        'user_id' => $newUser->id,
                        'activity' => 'New registration to the wbesite',
                        'activity_type' => 'registration',
                    ]);
                    
                    event(new Registered($newUser));

                    Auth::login($newUser);
                    return redirect(route('admin.dashboard', absolute: false));

                }
    
                return redirect(route('login'));
    
            }
        }catch (Exception $e) {
            dd($e);
        }
        
       
    }
}
