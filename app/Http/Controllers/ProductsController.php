<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function addProduct(Request $request)
    {
        $products = $request->only('product_name', 'product_quantity');

        DB::table('products')->insertGetId(
            [
                'product_name' => $products['product_name'],
                'quantity' => $products['product_quantity']
            ]
        );

        return redirect()->back();
    }
}