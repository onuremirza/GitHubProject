<?php
require_once 'db.php';
if(isset($_POST["signup"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // $user_check_query = $db->prepare(query: "SELECT * FROM users WHERE email= ?" ); 
    // $user_check_query->execute([$email]);
    // $user_check_query_count = $accountinf->rowCount();
    // $user = $user_check_query->fetch( mode:PDO::FETCH_ASSOC);
    
    $query = $db->query("SELECT * FROM accounts WHERE email = '{$email}'")->fetch(PDO::FETCH_ASSOC);

    if ($query) {
        header("Refresh:0;");
        exit();
        } 
    else{
        $sorgu = $db->prepare('INSERT INTO accounts SET namesurname = ?,email = ?,passwd = ?');
        $add= $sorgu->execute([
            $name, $email, $password
        ]);

        if($add){
            echo 'başarılı';
        }else{
            echo '<h2>başarısız</h2>';
        }

    }
}
if(isset($_POST["signin"])){
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sorgu = $db->prepare('SELECT * FROM accounts WHERE email = ? and passwd = ?');
    $sorgu->execute([
        $email, $password
    ]);

    $result = $sorgu->rowCount();

    if($result == 1 ){
        $_SESSION['email']= $email;
        header('Location: ./index.php');
    }else{
        echo '<h2>başarısız</h2>';
    }

}
?>