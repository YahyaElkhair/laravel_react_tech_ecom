<?php

namespace App\Models;

use App\Enums\PaymentStatus;
use App\Enums\PaymentMethodEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    /** @use HasFactory<\Database\Factories\PaymentFactory> */
    use HasFactory;

    protected $casts = [
        'status' => PaymentStatus::class,
        'method' => PaymentMethodEnum::class,
    ];



    protected $guarded = [];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function canCancel()
    {
        $max_days = 30;

        $can = $this->created_at->diff(now())->days < $max_days;

        $status = $this->status == PaymentStatus::SUCCESSFUL;
        // dd($this->created_at->diff(now())->days);
        return $can && $status;
    }

}
