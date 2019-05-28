<?php
    if($_GET["lat"]) {
        header("Access-Control-Allow-Origin: *");

        $lat = $_GET["lat"];
        $long = $_GET["long"];

        //connection to database
        $connect = mysqli_connect('localhost','u0607688_hackday','Misha159','u0607688_hackdays');
        mysqli_set_charset($connect, "utf8");

        //update status pay
        mysqli_query($connect, "INSERT INTO `data` (`id`, `lat`, `long`) VALUES ('', '$lat', '$long')");

        //response
        echo json_encode('Success');
    }
?>
