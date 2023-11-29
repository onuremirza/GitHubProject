<?php
include"db.php";

function addToCart($product_item){
    if(isset($_SESSION["shoppingCart"])){
        $shoppingCart = $_SESSION["shoppingCart"];
        $products = $shoppingCart["products"];
    }else{
        $products = array();
    }
    if(array_key_exists($product_item->id,$products)){
        $products[$product_item->id]->count++;
    }else{
        $products[$product_item->id] = $product_item;
    }
    $total_price = 0.0;
    $total_count = 0;
    foreach($products as $product){
        $product->total_price=$product->count*$product->pr_price;
        $total_price = $total_price + $product->total_price;
        $total_count += $product->count;
    }
    $summary["total_price"]=$total_price;
    $summary["total_count"]=$total_count;

    $_SESSION["shoppingCart"]["products"]=$products;
    $_SESSION["shoppingCart"]["summary"]=$summary;
    return $total_count;
}
function removeFromCart($product_id){

}
function incCount($product_id){

}
function decCount($product_id){

}
if(isset($_POST["p"])){
    $islem = $_POST["p"];
    if($islem=="addToCart"){
        $id = $_POST["product_id"];
        $product = $db->query("SELECT * FROM products WHERE id=($id)", PDO::FETCH_OBJ)->fetch();
        $product-> count = 1;
        addToCart($product);
    }
}
?>