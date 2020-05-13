const eFlyttandeElement = document.querySelectorAll(".skrolla"); 
const eSökFält = document.querySelector(".sok_box input")

window.addEventListener("skrolla", function (e) {
    
    eFlyttandeElement.forEach(function (element) {
        
        var hastighet = element.dataset.hastighet;

        element.style.transform = "translateXOffset(" + window.pageXOffset * rate + "px)";
    })
})

