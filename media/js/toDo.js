/*jslint browser: true, node : true*/
/*jslint devel : true*/
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var valeurAjoutTitre, valeurAjout, compteur, currentValidateClassName, currentValidateClassHTML, deleteCurrentValidateClassName, currentDeleteClassName;
    compteur = 0;
    if (navigator.onLine === false) {
        alert("Vous n'avez pas de connexion internet !!");
        return;
    }
    document.getElementById("valider").addEventListener("click", function(){
        valeurAjoutTitre = document.getElementById('ajoutTitre').value;
        valeurAjoutTitre = valeurAjoutTitre.trim();
        valeurAjout = document.getElementById('ajout').value;
        valeurAjout = valeurAjout.trim();
        console.log(valeurAjoutTitre);
        console.log(valeurAjout);
        if (valeurAjoutTitre !== "" && valeurAjout !== "") {
            compteur = compteur + 1;
            document.getElementById('faire').innerHTML = document.getElementById('faire').innerHTML + '<div class="panel panel-default panel' + compteur + '"><div class="panel-heading"><h3 class="panel-title">' + valeurAjoutTitre + '</h3><img class="delete" src="media/icons/delete.png" alt="delete" /></div><div class="panel-body">' + valeurAjout + '<img class="validate" src="media/icons/validate.png" alt="validation" /></div></div>';
        }
    });
});