<?php
    if($_GET["status"]) {
        header("Access-Control-Allow-Origin: *");

        //connection to database
        $connect = mysqli_connect('localhost','u0607688_hackday','Misha159','u0607688_hackdays');
        mysqli_set_charset($connect, "utf8");

        //initialize arrays
        $json_data = array ();

        $query = mysqli_query($connect, "SELECT `id`, `lat`, `long` FROM `data`");
        while($data = mysqli_fetch_array($query)) {
            array_push($json_data, array ('id'=>$data['id'],'lat'=>$data['lat'],'long'=>$data['long']));
        }

        //response
        echo json_encode($json_data);
    }
?>
