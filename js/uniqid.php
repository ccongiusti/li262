<?php
    if (isset($_GET["count"]))
    {        
        $table = [];
        $count = $_GET["count"];
        for ($i=0;$i<$count;$i++)
            $table[]=uniqid();
        echo json_encode($table);
    } else {
        echo json_encode(uniqid());
    }
?>