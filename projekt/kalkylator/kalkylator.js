/* Här deklarerar vi de DOM värdena vi vill använda */

const raknare = document.querySelector(".kalkylator");
const nyckel = document.querySelector(".kalkylator_operatorer");


 nyckel.addEventListener("click", e => {
    if (e.target.matches("button")) {
        /* Gör något här */
    }
})

const key = e.target;
const handling = key.dataset.action;


if (!action) {
    console.log("Nummer nyckel!");
}
if (
    /* Det här är det 'conditions' vi sätter för vår if-sats */
   action === 'add' ||
   action === 'subtract' ||
   action === 'multiply' ||
   action === 'divide'
) {
    /* Om IF-satsen stämmer ska detta skrivas */
    console.log('Operators nyckel!');
}
/* Här avlyssnar vi om resterande av knapparna fungerar i log */
if (action === 'deciamal') {
   console.log('Decimal nyckel'); 
}
if (action === 'clear') {
    console.log('Rensad nyckel');
}
if (action === 'calculate') {
    console.log('Kalkylerings nyckel');
}

const skarm = document.querySelector(".kalkylator_skarm");

nyckel.addEventListener("click", e => {
    if (e.target.matches("button")) {
       const key = e.target
       const action = key.dataset.action
       const keyContent = key.textContent
       const displayedNum = display.textContent
    }
})

if (!action) {
    if (displayedNum === "0") {
        display.textContent = keyContent
    } else {
       display.textContent = displayedNum + keyContent 
    }
}

if (action === "decimal") {
    display.textContent = displayedNum + '.'
}

const skärm = document.querySelector(".kalkylator_skarm");

nyckel.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const nyckel = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    }
})

if (!action) {
    if (displayedNum === "0") {
        display.textContent = keyContent
    } else {
        display.textContent = displayedNum + keyContent
    }
}