<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartProduct extends Model
{


    public static function boot()
    {
        parent::boot();

        static::saving(function ($cartProduct) {
            $product = Product::find($cartProduct->product_id);
            if ($product) {
                $cartProduct->total = $product->price * $cartProduct->quantity;
            }
        });
    }
}
