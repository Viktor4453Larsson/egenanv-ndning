// Här placerar vi alla de DOM element vi vill nå
const aktiveraKnapp = document.querySelector(".sidmeny-navigation");
const stangaKnapp = document.querySelector(".stanga_knapp");
const sidbar = document.querySelector(".sidmeny");


// Öppnar sidmenyn
aktiveraKnapp.addEventListener("click", function () {
    console.log(sidmeny.classList);
    if (sidmeny.classList.contains("show-sidebar")) {
        sidmeny.classList.remove("show-sidebar");
    }
    else {
        sidmeny.classList.add("show-sidebar");
    }
})

//X knappen stänger ner sidmenyn
stangaKnapp.addEventListener("click", function () {
    sidmeny.classList.remove("show-sidebar");
})