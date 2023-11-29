<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
<body>
    <?php require_once"lib/db.php"?>
    <?php 
        $products = $db->query("SELECT * from products",PDO::FETCH_OBJ)->fetchAll();
    ?>
    <?php require_once"inc/header.php"?>
    <?php require_once"inc/container.php"?>
    <?php require_once"inc/store.php"?>
    
</body>
<?php require_once"inc/footer.php"?>
<script src="jquery.js"></script>
<script src="script.js"></script>
<script src="custom.js"></script>
</html>