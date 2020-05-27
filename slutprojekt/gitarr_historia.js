const eFlyttandeElement = document.querySelectorAll(".skrolla");
const elementTal = document.querySelector("input");
const elementP = document.querySelector("p");
const elementLabel = document.querySelector("label");
const elementInput = document.querySelector("input");
const eBody = document.querySelector(".innehall");
const eBox = document.querySelector("body");
const eH1 = document.querySelector("h1");
const eH3 = document.querySelector("h3");
const eSkicka = document.querySelector("#skicka");
eSkicka.addEventListener("click", gissa);


/* En funktion som kan ändra tema på sidan */
function gissa() {
    var tema = elementInput.value
    if (tema == "darkmode") {
        /* Rätt svar! */
        elementP.textContent = "Rätt Svar!";
        eBox.style.backgroundColor = "#001100";
        eH1.style.backgroundColor = "#FFFFFF";
        eH3.style.backgroundColor = "#FFFFFF";
        eKnapp1.style.backgroundColor = "#222";
        eKnapp2.style.backgroundColor = "#222";
    } else {
        /* Fel Svar! */
        elementP.textContent = "Testa temat ligtmode eller darkmode!"
    }
    /* Ett annat alternativt val fast med ljust tema */
    if (tema == "lightmode") {
        /* Rätt svar! */
        eBox.style.backgroundColor = "#FFEEFF";
        eH1.style.backgroundColor = "#333";
        eH3.style.backgroundColor = "#444";
        eKnapp1.style.backgroundColor = "#777";
        eKnapp2.style.backgroundColor = "#777";
    } else {
        /* Fel Svar! */
        elementP.textContent = "Testa temat ligtmode eller darkmode!";
    }
}
/* Kod för att animera note.png bilden på sidan */
window.addEventListener("scroll", function (e) {

    eFlyttandeElement.forEach(function (element) {

        var rate = element.dataset.rate;

        element.style.transform = "translateY(" + window.pageYOffset * rate + "px)";
    });
});