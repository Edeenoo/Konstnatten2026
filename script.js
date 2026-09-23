let spakar = ["ner", "ner", "ner", "ner"];

function bytSpak(nummer) {

    if (spakar[nummer - 1] === "ner") {
        spakar[nummer - 1] = "upp";
    } else {
        spakar[nummer - 1] = "ner";
    }

    let bild = document.getElementById("spak" + nummer);

    if (spakar[nummer - 1] === "upp") {
        bild.src = "Bilder/Koridor1/spakupp.png";
    } else {
        bild.src = "Bilder/Koridor1/spakner.png";
    }

    kontrolleraPussel();
}

function kontrolleraPussel() {

    if (
        spakar[0] === "upp" &&
        spakar[1] === "ner" &&
        spakar[2] === "ner" &&
        spakar[3] === "upp"
    ) {
        document.getElementById("vidare").style.display = "block";
    } else {
        document.getElementById("vidare").style.display = "none";
    }
}