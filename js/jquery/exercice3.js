$(document).ready(function () {
    $.ajax(
        {
            "url": "/js/serveur_liste.php",
            "type": "GET"
        }
    ).done(function (data) {
        console.log(data);
    });
});

