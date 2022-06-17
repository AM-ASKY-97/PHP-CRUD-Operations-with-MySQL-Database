<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Bootstrap Elegant Account Login Form with Avatar Icon</title>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

     <!-- ajax -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <link rel="stylesheet" href="css/login.css">
</head>

<body>
    <div class="login-form">

        <div class="text-danger" id="messageError"></div>

        <form id="form">
            <div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
            <h4 class="modal-title">Login to Your Account</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="User Name" id="userName" name="userName">
                <div class="text-danger" id="messageName"></div>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" id="password" name="password">
                <div class="text-danger" id="messagePassword"></div>
            </div>
            <div class="form-group small clearfix">
                <label class="form-check-label"><input type="checkbox"> Remember me</label>
                <a href="#" class="forgot-link">Forgot Password?</a>
            </div>
            <button type="button" class="btn btn-primary btn-block btn-lg text-white login" name="login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
        </form>
        <div class="text-center small">Don't have an account? <a href="singup.php">Sign up</a></div>
    </div>

    <!-- Js Files -->
    <script src="my_script.js"></script>
</body>

</html>