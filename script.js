
let anzahl = 0;

const zaehler = document.getElementById("zaehler");
const knopf = document.getElementById("knopf");

knopf.addEventListener("click", function () {
    anzahl = anzahl + 1;
    zaehler.textContent = anzahl;
});


