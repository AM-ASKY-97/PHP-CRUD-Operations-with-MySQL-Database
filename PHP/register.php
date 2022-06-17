<?php
    include 'conn.php';

    $name = $_POST['sendName'];
    $email = $_POST['sendEmail'];
    $pass= $_POST['sendPass'];
    $conPass= $_POST['sendconPass'];

    $sql = "INSERT INTO login(name, email, password, conPassword) VALUES ('$name', '$email', '$pass', '$conPass')";
    
    if (mysqli_query($con, $sql))
    {
        echo 'New registration successfully Added';       
    }

    else
    {
        echo "Error ".mysqli_error($con);
    }
?>