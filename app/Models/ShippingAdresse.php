<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippingAdresse extends Model
{
    /** @use HasFactory<\Database\Factories\UserShippingAdresseFactory> */
    use HasFactory;



    protected $fillable = [
        'client_id',
        'city',
        'postal_code',
        'country',
        'street',
        'is_default',
    ];



    protected $casts = [
        'address' => 'array',

    ];



    public function client()
    {
        return $this->belongsTo(Customer::class);
    }

    public function orders()
    {
        return $this->HasMany(Order::class);
    }

}
