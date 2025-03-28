<?php

namespace App\Models;


use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'discount',
        'discount_start',
        'discount_end',
        'price_after_discount',
        'tags',
        'description',
        'images_paths',
        'video_url',
        'thumbnail',
        'category_id',
        'stock',
        'is_active',
        'specifications',
        'rating',
        'review_count',
        'views',
        'favorite_count',
        'seller_id',
        'updated_by',
    ];

    protected $casts = [
        'tags' => 'array',
        'images_paths' => 'array',
        'specifications' => 'array',
        'discount_start' => 'datetime',
        'discount_end' => 'datetime',
    ];

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->hasMany(ProductReview::class);
    }

    public function carts()
    {
        return $this->belongsToMany(Cart::class);
    }
}
