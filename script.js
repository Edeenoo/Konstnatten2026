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

function svara(val) {

    if (val === 1) {
        document.getElementById("character").innerHTML =
            "Va? Nej! Du måste släppa ut mig! Jag är Åke Holm rektor över Ölands folkhögskola";

        document.getElementById("choices").innerHTML = `
            <button class="knapp" onclick="svara(4)">Okej då...</button>
            <button class="knapp" onclick="svara(5)">Vilken bra poäng!</button>
        `;

    } else if (val === 2) {
        document.getElementById("character").innerHTML =
            "Snälla jag kan erbjuda dig en egen programpunkt på nästa måndagsmöte";

        document.getElementById("choices").innerHTML = `
        
            <button class="knapp" onclick="svara(6)">Okej jag öppnar dörren</button>
            <button class="knapp" onclick="svara(7)">Okej jag öppnar dörren(men bestämt)</button>
        
        `;

    } else if (val === 3) {
        document.getElementById("character").innerHTML =
            "Tack! Skynda dig och öppna dörren!";

        document.getElementById("choices").innerHTML = `
            <button class="knapp" onclick="svara(8)">Öppna dörren</button>
        `;

    } else if (val === 4) {
        document.getElementById("character").innerHTML =
            "Äntligen! Jag visste att du skulle hjälpa mig.";

        document.getElementById("choices").innerHTML = "";

    } else if (val === 5) {
        document.getElementById("character").innerHTML =
            "Tack";

        document.getElementById("choices").innerHTML = "";

    } else if (val === 6) {
        document.getElementById("character").innerHTML =
            "Wohooo jag är räddad!";

        document.getElementById("choices").innerHTML = "";

    } else if (val === 7) {
        document.getElementById("character").innerHTML =
            "Tack! Jag kan garantera din plats i deltagarrådet inför all framtid";

        document.getElementById("choices").innerHTML = "";

    } else if (val === 8) {
        document.getElementById("character").innerHTML =
            "Dörren öppnas...";

        document.getElementById("choices").innerHTML = "";
    }
}

function visaText() {
    document.getElementById("text").style.display = "block";
}

function visa() {
    document.getElementById("text2").style.display = "block";
}
