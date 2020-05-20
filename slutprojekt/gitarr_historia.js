const eFlyttandeElement = document.querySelectorAll(".skrolla"); 

function darkmode() {
    const eBody = document.querySelector(".innehall");
    const eBox = document.querySelector("body");
    const eH1 = document.querySelector("h1");
    const eH3 = document.querySelector("h3");
    const eKnapp1 = document.querySelector("#K1");
    const eKnapp2 = document.querySelector("#K2");

    eBox.style.backgroundColor = "#001100";
    eH1.style.color = "#444";
    eH3.style.color = "#888";
    eKnapp1.style.color = "#222";
    eKnapp2.style.color = "#222";
}
function lightmode() {
    const eBody = document.querySelector(".innehall");
    const eBox = document.querySelector("body");
    const eH1 = document.querySelector("h1");
    const eH3 = document.querySelector("h3");
    const eKnapp1 = document.querySelector("#K1");
    const eKnapp2 = document.querySelector("#K2");

    eBox.style.backgroundColor = "#FFEEFF";
    eH1.style.color = "#FFF";
    eH3.style.color = "#BBB";
    eKnapp1.style.color = "#777";
    eKnapp2.style.color = "#777";
}

window.addEventListener("skrolla", function (e) {
    
    eFlyttandeElement.forEach(function (element) {
        
        var hastighet = element.dataset.hastighet;

        element.style.transform = "translateXOffset(" + window.pageXOffset * rate + "px)";
    })
})

