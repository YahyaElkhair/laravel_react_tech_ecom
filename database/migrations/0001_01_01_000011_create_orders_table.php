<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained("customers")->cascadeOnDelete();
            $table->foreignId('cart_id')->constrained("carts")->cascadeOnDelete();
            $table->foreignId('shipping_address_id')->constrained('shipping_adresses');
            $table->string('payment_method')->default('Card');
            $table->string('payment_status')->default('pending');
            $table->string('cancellation_reason')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
