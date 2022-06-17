<?php
     session_start();
     include 'conn.php';

     $name = $_POST['sendName'];
     $pass = $_POST['sendPass'];

     $Sql = "SELECT * FROM login WHERE name='$name' AND password='$pass'";

     $result =mysqli_query($con,$Sql);

     if(mysqli_num_rows($result)==1)
     {
         echo "success";
         echo $_SESSION['user_name'];
     }

     else 
     {
         echo "Invalid user name or password";
     }
?>