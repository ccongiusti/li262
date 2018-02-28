$(document).ready(function () {
    $.ajax(
        {
            "url": "/js/serveur_liste.php",
            "type": "GET"
        }
    ).done(function (data) {
        const users = JSON.parse(data);
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            let content = "";
            content += "<tr>";
            content += "<td>" + user.id + "</td>";
            content += "<td>" + user.nom + "</td>";
            content += "<td>" + user.prenom + "</td>";
            content += "<td>" + user.age + "</td>";
            content += "</tr>";
            $("#tableContent").append(content);
        }
    }).fail(function () {
        // console.log("catch : Echec de l'appel AJAX !");
        $("#tableContent").append("<tr><td colspan=\"4\" style=\"color:red;\">Echec de l'appel AJAX !</td></tr>");
    }).always(function () {
        // console.log("finally : On passe toujours par ici");
    });
});

