//Här hämtar vi alla element som vi tänker använda
const eNummer = document.querySelector(".värde");
const eMindre = document.querySelector(".knapp_minska");
const eNollstall = document.querySelector(".knapp_startaom");
const eMer = document.querySelector(".knapp_oke");
const btns = document.querySelectorAll(".btn");

//console.log(eNummer, eMindre, eNollstall, eMer);

//Vårt startvärde vid beräkning 
let startVarde = 0;

//En fuktion som låter knappen Öka addera det nuvarande värdet i startVarde
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const stilar = e.currentTarget.classList;
        //En if-sats som låter knappen Minska subtrahera det nuvarande värdet i startVarde
        if (stilar.contains("knapp_minska")) {
            startVarde--;
        }
        //En if-sats som låter knappen Öka addera det nuvarande värdet i startVarde
        else if (stilar.contains("knapp_oka")) {
            startVarde++;
        }
        //En if-sats som låter knappen Starta Om Nollställa det nuvarande värdet i startVarde
        else {
            startVarde == 0;
        }
        //Färgen ändras till orange vid ett värde över 0
        if (startVarde <= 1) {
            eNummer.style.color = "orange";
        }  
        // Färgen ändras till svart vid ett värde under 0
        if (startVarde >= -1) {
            eNummer.style.color = "black";
        } 
        // Färgen ändras till grön vid ett värde lika med 0
        if (startVarde === 0) {
            eNummer.style.color = "green";
        }
    })
})
