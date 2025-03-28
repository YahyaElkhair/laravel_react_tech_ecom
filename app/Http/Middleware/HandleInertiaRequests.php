<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
                // 'is_admin' => fn () => $request->user()?->isAdmin(), // Custom method
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
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
                'warning' => fn () => $request->session()->get('warning'),
                'info' => fn () => $request->session()->get('info'),
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
