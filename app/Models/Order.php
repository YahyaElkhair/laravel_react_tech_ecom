<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    /** @use HasFactory<\Database\Factories\OrderFactory> */
    use HasFactory;


	protected $fillable = [
		'client_id',
		'cart_id',
		'shipping_adresse_id',
		'total',
		'payment_method',
		'payment_status',
		'cancellation_reason',

	];

	protected $cat = [

	];
	
    public function client()
	{
		return $this->belongsTo(Client::class);
	}

	public function cart()
	{
		return $this->belongsTo(Cart::class);
	}

	public function shippingAddress()
	{
		return $this->belongsTo(ShippingAdresse::class);
	}







}
