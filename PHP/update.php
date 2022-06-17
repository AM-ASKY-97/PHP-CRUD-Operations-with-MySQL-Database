<?php
    include 'conn.php';

    $id = $_POST['editId'];

    $name = $_POST['editName'];
    $email = $_POST['editEmail'];
    $address = $_POST['editAddress'];
    $phone = $_POST['editPhone'];
    
    $sql = "UPDATE student SET name='$name', email= '$email', address='$address', phone = '$phone' WHERE id = $id";

    if (mysqli_query($con, $sql))
    {
        echo "<span class='text-success'>Record Successfully Updated</span>";
    }

    else
    {
        echo "<span class='text-danger'>Record Successfully Addedd</span>";
    }
?>