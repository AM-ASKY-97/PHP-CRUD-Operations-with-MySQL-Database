<?php
    include 'conn.php';

    $sql = "SELECT * FROM student";

    $result = mysqli_query($con, $sql);

    if ($result->num_rows > 0) {
        $i=0;
        while ($row = mysqli_fetch_array($result)) {
        $i++;
        ?>
            <tr id=<?php echo $row['id']?>>
                <td> <?php echo $i ?> </td>
                <td data-target="id" hidden> <?php echo $row['id'] ?> </td>
                <td data-target="name"> <?php echo $row['name'] ?> </td>
                <td data-target="email"> <?php echo $row['email'] ?> </td>
                <td data-target="address"> <?php echo $row['address'] ?> </td>
                <td data-target="phone"> <?php echo $row['phone'] ?> </td>
                <td>
                    <a href="#" class="edit" data-id="<?php echo $row['id']?>"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#" class="delete" data-toggle="modal" data-id="<?php echo $row['id']?>"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
            </tr>
    <?php
        }
    } else {
        echo "No Record";
    }

?>
