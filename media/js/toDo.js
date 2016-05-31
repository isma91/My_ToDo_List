/*jslint browser: true, node : true*/
/*jslint devel : true*/
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var valeurAjoutTitre;
    var valeurAjout;
    var compteur;
    compteur = 0;
    if (navigator.onLine === false) {
        alert("Vous n'avez pas de connexion internet !!");
        return;
    }
    document.getElementById("valider").addEventListener("click", function () {
        valeurAjoutTitre = document.getElementById('ajoutTitre').value;
        valeurAjoutTitre = valeurAjoutTitre.trim();
        valeurAjout = document.getElementById('ajout').value;
        valeurAjout = valeurAjout.trim();
        document.getElementById('ajoutTitre').value = "";
        document.getElementById('ajout').value = "";
        if (valeurAjoutTitre !== "" && valeurAjout !== "") {
            compteur = compteur + 1;
            document.getElementById('faire').innerHTML = document.getElementById('faire').innerHTML + '<div class="panel panel-default" id="panel_' + compteur + '"><div class="panel-heading"><h3 class="panel-title" id="panel_title_' + compteur + '">' + valeurAjoutTitre + '</h3><img class="delete" src="media/icons/delete.png" alt="delete" onclick="remove_panel(' + compteur + ')" /></div><div class="panel-body" id="panel_body_' + compteur + '">' + valeurAjout + '<img class="validate" src="media/icons/validate.png" alt="validation" onclick="validate_panel(' + compteur + ')" /></div></div>';
        }
    });
});
/*
* We create this function here to get scoped in the html file
*/
var validate_panel_title;
var validate_panel_body;
var panel_to_delete;
function remove_panel(id_panel) {
    "use strict";
    panel_to_delete = document.getElementById("panel_" + id_panel);
    panel_to_delete.remove();
}
function validate_panel(id_panel) {
    "use strict";
    validate_panel_title = document.getElementById('panel_title_' + id_panel).innerHTML;
    validate_panel_body = document.getElementById('panel_body_' + id_panel).innerHTML;
    validate_panel_body = validate_panel_body.replace('<img class="validate" src="media/icons/validate.png" alt="validation" onclick="validate_panel(' + id_panel + ')">', '');
    remove_panel(id_panel);
    document.getElementById('fini').innerHTML = document.getElementById('fini').innerHTML + '<div class="panel panel-default" id="panel_' + id_panel + '"><div class="panel-heading"><h3 class="panel-title">' + validate_panel_title + '</h3><img class="delete" src="media/icons/delete.png" alt="delete" onclick="remove_panel(' + id_panel + ')" /></div><div class="panel-body">' + validate_panel_body + '</div></div>';
}
