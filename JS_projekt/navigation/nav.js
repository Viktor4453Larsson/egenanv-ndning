

const navSkifftande = document.querySelector(".navigera_runt");
const links = document.querySelector(".links");

navSkifftande.addEventListener("click", function () {
    //Här kollar vi om klassen stämmer och fungerar
    console.log(links.classList.contains("links"));
   if (links.classList.contains("visa-lankarna")) {
       links.classList.remove("visa-lankarna");
   } 
   else {
       links.classList.add("visa-lankarna");
   }
});