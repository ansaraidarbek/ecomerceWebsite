<?php
  // $all_files = glob("images/*.*");
  // for ($i=0; $i<count($all_files); $i++)
  //   {
  //     $image_name = $all_files[$i];
  //     $supported_format = array('gif','jpg','jpeg','png');
  //     $ext = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
  //     if (in_array($ext, $supported_format))
  //         {
  //           echo '<img src="'.$image_name .'" alt="'.$image_name.'" />'."<br /><br />";
  //         } else {
  //             continue;
  //         }
  //   }

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "testingphp";

  $conn = new mysqli($servername, $username, $password, $dbname);

  if($conn->connect_error){
    die("connection failed: " .$conn->connect_errror);
  }

  $query = "SELECT * FROM groups ORDER BY waitingList";

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
