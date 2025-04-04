<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{

    protected $fillable = [
        'user_id',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shippingAddresss()
    {
        return $this->HasMany(ShippingAdresse::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }


    public function reviews()
    {
        return $this->hasMany(ProductReview::class);
    }

    
}
