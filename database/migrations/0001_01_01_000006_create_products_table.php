<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId("seller_id")->constrained('users')->onDelete('cascade');
            $table->foreignId("category_id")->constrained('categories')->onDelete('cascade');
            $table->string('name');
            $table->decimal('price', 10, 2); // Product price
            $table->decimal('discount', 5, 2)->nullable(); // Discount percentage
            $table->timestamp('discount_start')->nullable(); // Discount start date
            $table->timestamp('discount_end')->nullable(); // Discount end date
            $table->decimal('price_after_discount', 10, 2)->nullable(); // Final price after discount
            $table->string('tags')->nullable();
            $table->string('description')->nullable();
            $table->json('images_paths')->nullable(); // JSON array for image paths
            $table->string('video_url')->nullable(); // Video URL
            $table->string('thumbnail')->nullable(); // Thumbnail image path
            $table->integer('stock'); // Available stock
            $table->boolean( 'is_active')->default(true);
            $table->json('specifications')->nullable(); // JSON for product specifications
            $table->float('rating', 3, 2)->default(0); // Average rating (e.g., 4.5/5)
            $table->integer('review_count')->default(0); // Number of reviews
            $table->integer('views')->default(0); // Number of views
            $table->integer('favorite_count')->default(0); // Number of times added to favorites
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
