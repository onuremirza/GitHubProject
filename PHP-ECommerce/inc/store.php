<div class="store">
    <a name="Products"></a>
    <p class="Products">Products</p>    
    <?php foreach ($products as $products){?>
        <div class="card">
            <div class="thumbnail"><img src="./img/<?php echo $products->pr_photo; ?>" alt="" width="192" height="200"></div>
            <p class="card-head"><?php echo $products->pr_head; ?></p>
            <p class="card-exp"><?php echo $products->pr_exp;?></p>
            <p class="card-price"><?php echo $products->pr_price;?> $</p>
            <button class="addToCartBtn" product_id="<?php echo $products->id;?>" type="submit"><i class='bx bx-cart-add'></i>Add</button>
        </div>
    <?php } ?>
</div>