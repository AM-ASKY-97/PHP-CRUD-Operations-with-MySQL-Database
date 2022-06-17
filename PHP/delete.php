<?php
    include 'conn.php';

    $id = $_POST['sendID'];

    $sql = "DELETE FROM student WHERE id = '$id'";

    if (mysqli_query($con, $sql))
    {
        echo "record Delete";
    }

    else
    {
        echo "error";
    }
?>