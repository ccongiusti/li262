<?php
    $users = [];
    for ($i=0;$i<10;$i++) {
        array_push($users, array(
                "id" => uniqid(),
                "nom" => "nom".$i,
                "prenom" => "prenom".$i,
                "age" => 45+$i
            )
        );
    }
    echo json_encode($users);
?>