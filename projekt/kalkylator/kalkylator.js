/* Här deklarerar vi de DOM värdena vi vill använda */
const kalkylator = document.querySelector(".kalkylator");
const nycklar = document.querySelector(".kalkylator_nycklar");

nycklar.addEventListener('click', e => {
    if (e.target.matches('button')) {
        /* Då ska någonting hända */
    }
})

     


const key = e.target
const handling = key.dataset.action

if (!action) {
    console.log("Nummer nyckel!");
}