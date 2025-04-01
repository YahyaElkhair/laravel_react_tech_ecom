<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Closure;
use Inertia\Inertia;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }




    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // Authentication data
            'auth' => [
                'user' => fn () => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'avatar' => $request->user()->avatar_url,
                    'role' => $request->user()->role,

                ] : null,
            ],
            
            // Route helper and current location
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                    'query' => $request->query(),
                ]);
            },
            
            // Flash messages
            'flash' => [
                // Returns the first non-null message it finds
                'message' => fn () => $request->session()->get('success') 
                               ?? $request->session()->get('error')
                               ?? $request->session()->get('warning')
                               ?? $request->session()->get('info'),

                // Returns the first non-null type it finds
                'type' => fn () => $request->session()->has('success') ? 'success'
                          : ($request->session()->has('error') ? 'error'
                          : ($request->session()->has('warning') ? 'warning' 
                          : ($request->session()->has('info') ? 'info' : null)))
            ],
            
            // Feature flags
            'features' => [
                'password_reset' => Route::has('password.request'),
                'registration' => Route::has('register'),
                'email_verification' => config('features.email_verification'),
            ],
            
            // Application settings
            'settings' => [
                'app_name' => config('app.name'),
                'locale' => config('app.locale'),
                'timezone' => config('app.timezone'),
            ],
            
            // Status messages
            'status' => fn () => $request->session()->get('status'),
        ]);
    }
}
