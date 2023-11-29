$(document).ready(function(){
    $(".addToCartBtn").click(function(){
        var url = "http://localhost/lib/cart_db.php";
        var data = {
            p : "addToCart",
            product_id : $(this).attr("product_id")
        }
        $.post(url,data,function(response){
            console.log(response);
        })
    })
})