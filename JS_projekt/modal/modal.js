// Ta fram modal-btn, modal overlay och close btn som element
const eModalKnapp = document.querySelector(".modal-btn");
const eModalFramfor = document.querySelector(".modal-overlay");
const eStangdKnapp = document.querySelector(".close-btn");

// Lyssna av för om click utförs på modal-btn och close btn

//När användaren trycker på eModalKnapp lägg på klassen .open-modal för att öppna modal
eModalKnapp.addEventListener("click", function () {
    eModalFramfor.classList.add("open-modal");
});


//När användaren trycker eStangaKnapp lägg på klassen .open-modal för att ta bort klassen så att modal inte längre syns
eStangdKnapp.addEventListener("click", function () {
    eModalFramfor.classList.remove("open-modal");

});