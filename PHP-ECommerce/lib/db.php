<?php
session_start();
ob_start();
try{
    $db = new PDO("mysql:hostname=localhost;dbname=e-commerce;charset=utf8","root","");
}
catch(PDOException $e){
    echo $e->getMessage();
}

if(isset($_SESSION["shoppingCart"])){
    $shoppingCart = $_SESSION["shoppingCart"];

    $total_price = $shoppingCart["summary"]["total_price"];
    $total_count = $shoppingCart["summary"]["total_count"];
    $shopping_products = $shoppingCart["products"];
}else{
    $total_price = 0.0;
    $total_count = 0;
}

if(isset($_SESSION['email'])){
    $accountinf = $db->prepare(query:" SELECT * FROM accounts WHERE email = ?");
    $accountinf->execute([$_SESSION['email']]);
    $accountinfcount = $accountinf->rowCount();
    $accountinf = $accountinf->fetch( mode:PDO::FETCH_ASSOC);

    if($accountinfcount > 0){
        $name = $accountinf['namesurname'];
        $email = $accountinf['email'];
        $address = $accountinf['address'];
    }
}
?>