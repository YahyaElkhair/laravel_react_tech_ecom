<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategories extends Model
{
    /** @use HasFactory<\Database\Factories\ProductCategoriesFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'spesifications',
    ];
}
