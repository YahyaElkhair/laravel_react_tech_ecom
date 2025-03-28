<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecentActivities extends Model
{
    /** @use HasFactory<\Database\Factories\RecentActivitiesFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'activity',
        'activity_type',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }


}
