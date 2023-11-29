<?php require_once"lib/register_db.php"?>
<div class="container">
    <div class="content">
        <h2 class="logo"><i class='bx bxl-firebase'></i>Onur Emirza</h2>
        <div class="text-sci">
            <h2>Welcome!<br><span>To My New Website.</span></h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div class="social-icons">
                <a href=""><i class='bx bxl-facebook' ></i></a>
                <a href=""><i class='bx bxl-instagram'></i></a>
                <a href=""><i class='bx bxl-twitter' ></i></a>
                <a href=""><i class='bx bxl-linkedin' ></i></a>
                <a href=""><i class='bx bxl-youtube' ></i></a>
                <a href=""><i class='bx bxl-steam' ></i></a>
                <a href=""><i class='bx bxl-github' ></i></a>
            </div>
        </div>
    </div>
    <?php if(isset($_SESSION['email'])){?>
        <div class="account-box">
            <div class="form-box acdetails">
                <form action="">
                    <h2>Account Details</h2>
                    <h3>Name & Surname: <?php echo $name; ?></h3>
                    <h3>Password: ******</h3>
                    <h3>E-mail: <?php echo $email; ?></h3>
                    <h3>Adress: <?php echo $address; ?></h3>
                </form>
            </div>
        </div>
    <?php }else { ?>
        <div class="logreg-box">
            <div class="form-box login">
                <form action="" method="POST">
                    <h2>Sign In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input type="email" name="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" name="password" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox">Remember Me</label>
                        <label><a href="">Forgot Password?</a></label>
                    </div>
                    <button type="submit" class="btn" name="signin">Sign In</button>
                    <div class="login-register">
                        <p>Don't have an account? <a href="#" class="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
            <div class="form-box register">
                <form action="" method="POST">
                    <h2>Sign Up</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-user' ></i></span>
                        <input type="text" name="name" required>
                        <label>Name & Surname</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input type="email" name="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" name="password" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" name="term" required>I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" class="btn" name="signup">Sign Up</button>
                    <div class="login-register">
                        <p>Already have an account? <a href="#" class="login-link">Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    <?php }?>
</div>
