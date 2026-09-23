   // Alla spakar börjar nere
        let spakar = ["ner", "ner", "ner", "ner"];

        function bytSpak(nummer) {

            if (spakar[nummer - 1] === "ner") {
                spakar[nummer - 1] = "upp";
            } else {
                spakar[nummer - 1] = "ner";
            }

            // Byt bilden
            let bild = document.getElementById("spak" + nummer);

            if (spakar[nummer - 1] === "upp") {
                bild.src = "spakupp.png";
            } else {
                bild.src = "spakner.png";
            }

            kontrollera();
        }


        function kontrollera() {

            // Rätt kombination: ner, upp, upp, ner
            if (
                spakar[0] === "ner" &&
                spakar[1] === "upp" &&
                spakar[2] === "upp" &&
                spakar[3] === "ner"
            ) {
                document.getElementById("vidare").style.display = "block";
            } else {
                document.getElementById("vidare").style.display = "none";
            }

        }