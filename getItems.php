<?php
    $title = $_GET['keyWord'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "testingphp";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
    die("connection failed: " .$conn->connect_errror);
    }

    $query = "SELECT * FROM content WHERE groupsTitle='$title' ORDER BY addedDate DESC";

    $result = mysqli_query($conn, $query);

    $json_array = array();

    if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        array_push($json_array, $row);
    }
    }

    echo json_encode($json_array);

    $conn->close();
?>