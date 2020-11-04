



var formValid =document.getElementById("bouton_envoi");

var prenom =document.getElementById("prenom");

var missPrenom = document.getElementById("MissPrenom");

formValid.addEventListener("click",validation);
function validation(Event)
{
    if (prenom.validity.valueMissing)
    {
        Event.preventDefaut();
        missPrenom.textContent ="prenom manquant";
        missPrenom.style.color = "red";
    }
    else if (prenomValid.test(prenom.value) == false)
     {
        Event.preventDefaut();
        missPrenom.textContent = "Format incorrect";
        missPrenom.style.color = "orange";
    }
    else
    {

    }

    
}

