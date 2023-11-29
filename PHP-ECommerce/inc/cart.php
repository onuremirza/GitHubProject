<div class="cart">
    <a name="Cart"></a>
    <p class="cart-header">Cart</p>
    <?php if($total_count > 0){?>
        <table>
            <thead>
                <th>Product Photo</th>
                <th>Name</th>
                <th>Total</th>
                <th></th>
            </thead>
            <?php foreach ($shopping_products as $product){?>
                <tbody>
                    <tr>
                        <td><div><img src="./img/<?php echo $product->pr_photo; ?>" alt="" width="100" height="100"></div></td>
                        <td>
                            <p class="cart-head"><b><?php echo $product->pr_exp; ?></b></p>
                            <p class="cart-price"><?php echo $product->pr_price;?> $</p>
                            <select class="qty-listbox" Size="Number_of_options">  
                            <option>Qty:<?php echo $product->count;?></option>
                            <option>1</option>  
                            <option>2</option>  
                            <option>3</option>  
                            <option>4</option>  
                            <option>5</option>  
                            <option>6</option>  
                            <option>7</option>  
                            <option>8</option> 
                            <option>9</option>
                            </select>  
                        </td>
                        <td><?php echo $product->total_price;?>$</td>
                        <td><a href=""><i class='bx bxs-trash'></i></a></td>
                    </tr>
                </tbody>
            <?php } ?>
            <tr class="cart-total">
                <td></td>
                <td>Qty: <?php echo $total_count;?></td>
                <td><?php echo $total_price;?>$</td>
                <td><a href=""><i class='bx bx-right-arrow-alt'></i></a></td>
            </tr>
        </table>    
    <?php }else{?>
            <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>
        <?php }?>
</div>