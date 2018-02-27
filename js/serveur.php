<?php
    $user = array(
        "id" => uniqid(),
        "nom" => $_GET["nom"],
        "prenom" => $_GET["prenom"],
        "age" => $_GET["age"]
    );
    echo json_encode($user);
?>