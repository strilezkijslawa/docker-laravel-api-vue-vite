<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all()->toArray();
        return array_reverse($products);      
    }
    
    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json('Product deleted!');
    }
}
