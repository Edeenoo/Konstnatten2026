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
        spelaLjud("akeljud/slapputmig2.mp3");
        
        document.getElementById("character").innerHTML =
            "Va? Nej! Du måste släppa ut mig! Jag är Åke Holm rektor över Ölands folkhögskola";

        document.getElementById("choices").innerHTML = `
            <button class="knapp" onclick="svara(4)">Okej då...</button>
            <button class="knapp" onclick="svara(5)">Vilken bra poäng!</button>
        `;

    } else if (val === 2) {
        spelaLjud("akeljud/mondagsmote.mp3");
        document.getElementById("character").innerHTML =
            "Snälla jag kan erbjuda dig en egen programpunkt på nästa måndagsmöte";

        document.getElementById("choices").innerHTML = `
        
            <button class="knapp" onclick="svara(6)">Okej jag öppnar dörren</button>
            <button class="knapp" onclick="svara(7)">Okej jag öppnar dörren(men bestämt)</button>
        
        `;

    } else if (val === 3) {
 spelaLjud("akeljud/skynda.mp3");
        document.getElementById("character").innerHTML =
            "Tack! Skynda dig och öppna dörren!";

        document.getElementById("choices").innerHTML = `
            <button class="knapp" onclick="svara(8)">Öppna dörren</button>
        `;

    } else if (val === 4) {
        spelaLjud("akeljud/antligen.mp3");
        document.getElementById("character").innerHTML =
            "Äntligen! Jag visste att du skulle hjälpa mig." + '<a href="index8ake.html" >Gå vidare</a>';

        document.getElementById("choices").innerHTML = "";

    } else if (val === 5) {
        spelaLjud("akeljud/Tack.mp3");
        document.getElementById("character").innerHTML =
            "Tack" + '<a href="index8ake.html" >Gå vidare</a>';

        document.getElementById("choices").innerHTML = "";

    } else if (val === 6) {
        spelaLjud("akeljud/Wohooo.mp3");
        document.getElementById("character").innerHTML =
            "Wohooo jag är räddad!" + '<a href="index8ake.html" >Gå vidare</a>';

        document.getElementById("choices").innerHTML = "";

    } else if (val === 7) {
        spelaLjud("akeljud/deltagare.mp3");
        document.getElementById("character").innerHTML =
            "Tack! Jag kan garantera din plats i deltagarrådet inför all framtid" + '<a href="index8ake.html" >Gå vidare</a>';

        document.getElementById("choices").innerHTML = "";

    } else if (val === 8) {
        document.getElementById("character").innerHTML =
            "Dörren öppnas..." + '<a href="index8ake.html" >Gå vidare</a>';

        document.getElementById("choices").innerHTML = "";
    }
}

function visaText() {
    document.getElementById("text").style.display = "block";
}

function visa() {
    spelaLjud("akeljud/underbara.mp3");
    document.getElementById("text2").style.display = "block";
    }

function vis() {
    
    document.getElementById("text3").style.display = "block";
    }

function svaraAke2(val) {

    if (val === 1) {
spelaLjud("akeljud/expeditionen.mp3");
        document.getElementById("character").innerHTML =
            "Hm, du kanske har en poäng där… okej då jag släpper igenom dig, men gå förbi expeditionen och skaffa rätt tagg så snart som möjligt!";

        document.getElementById("choices").innerHTML = `
            <button onclick="svaraAke2(3)">Tack så mycket, Åke!</button>
        ` ;

    } else if (val === 2) {
spelaLjud("akeljud/Ljugejtillmig.mp3");
        document.getElementById("character").innerHTML =
            "Nej du! Nu ljuger du bara jag, Åke Holm, Rektor av Ölands Folkhögskola, ska inte ljugas till. Iväg med dig nu." + '<a href="index17ake.html" ">Försök igen</a>';

        document.getElementById("choices").innerHTML = "";

    } else if (val === 3) {
spelaLjud("akeljud/.mp3");
        document.getElementById("character").innerHTML =
            "Bra och glöm inte att skaffa rätt tagg!" + '<a href="indexkontor.html" >Gå vidare</a>';

        document.getElementById("choices").innerHTML = "";
    }
}

function spelaLjud(file) {
    const audio = document.getElementById("dialogueSound");

    audio.src = file;
    audio.currentTime = 0;
    audio.play();
}





// script.js
const Keyboard = {
	elements: {
		main: null,
		keysContainer: null,
		keys: [],
		capsKey: null,
	},

	properties: {
		value: "",
		capsLock: false,
		keyboardInputs: null,
		keyLayout: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"0",
			"backspace",
			"q",
			"w",
			"e",
			"r",
			"t",
			"y",
			"u",
			"i",
			"o",
			"p",
			"caps",
			"a",
			"s",
			"d",
			"f",
			"g",
			"h",
			"j",
			"k",
			"l",
			"enter",
			"done",
			"z",
			"x",
			"c",
			"v",
			"b",
			"n",
			"m",
			",",
			".",
			"?",
			"space",
		],
	},

	init() {
		// create and setup main element
		this.elements.main =
			document.createElement("div");
		this.elements.main.classList
			.add("keyboard", "keyboard--hidden");
		document.body
			.appendChild(this.elements.main);

		// create and setup child container component
		this.elements.keysContainer =
			document.createElement("div");
		this.elements.keysContainer
			.classList.add("keyboard__keys");
		this.elements.main
			.appendChild(this.elements.keysContainer);

		// create and setup key elements
		this.elements.keysContainer
			.appendChild(this._createKeys());
		this.elements.keys =
			this.elements.keysContainer
				.querySelectorAll(".keyboard__key");

		// open keyboard for elements with .use-keyboard-input
		this.properties.keyboardInputs =
			document.querySelectorAll(
				".use-keyboard-input"
			);
		this.properties
			.keyboardInputs
			.forEach((element) => {
				element.addEventListener("focus", () => {
					this
						.open(element.value, (currentValue) => {
							element.value = currentValue;
						});
				});
			});
	},

	_createIconHTML(icon_name) {
		return `<span class="material-icons">${icon_name}</span>`;
	},

	_createKeyBtn(iconName, class1, onclick, class2) {
		this.keyElement =
			document.createElement("button");

		// add common attributes and classes
		this.keyElement
			.setAttribute("type", "button");
		this.keyElement
			.classList.add("keyboard__key");

		// add specific listeners and classes
		this.keyElement
			.classList.add(class1, class2);
		this.keyElement.innerHTML =
			this._createIconHTML(iconName);
		this.keyElement
			.addEventListener("click", onclick);
	},

	_createKeys() {
		const fragment =
			document.createDocumentFragment();

		this.properties.keyLayout.forEach((key) => {
			const insertLineBreak =
				["backspace", "p", "enter", "?"].indexOf(key) !== -1;

			switch (key) {
				case "backspace":
					this._createKeyBtn(
						"backspace", "keyboard__key--wide",
						() => {
							this.properties.value =
								this.properties.value.slice(0, -1);
							this._updateValueInTarget();
						});
					break;

				case "caps":
					this._createKeyBtn(
						"keyboard_capslock",
						"keyboard__key--activatable",
						() => {
							this.elements.capsKey
								.classList
								.toggle("keyboard__key--active");
							this._toggleCapsLock();
						},
						"keyboard__key--wide"
					);
					this.elements.capsKey = this.keyElement;
					break;

				case "enter":
					this._createKeyBtn(
						"keyboard_return", "keyboard__key--wide",
						() => {
							this.properties.value += "\n";
							this._updateValueInTarget();
						});
					break;

				case "space":
					this._createKeyBtn(
						"space_bar", "keyboard__key--extra--wide",
						() => {
							this.properties.value += " ";
							this._updateValueInTarget();
						});
					break;

				case "done":
					this._createKeyBtn(
						"check_circle",
						"keyboard__key--dark",
						() => {
							this.close();
							this._updateValueInTarget();
						},
						"keyboard__key--wide"
					);
					break;

				default:
					this._createKeyBtn();
					this.keyElement.textContent =
						key.toLowerCase();

					this.keyElement
						.addEventListener(
							"click",
							() => {
								this.properties.value +=
									this.properties.capsLock
										? key.toUpperCase()
										: key.toLowerCase();
								this._updateValueInTarget();
							});
					break;
			}

			fragment.appendChild(this.keyElement);

			if (insertLineBreak) {
				fragment
					.appendChild(document.createElement("br"));
			}
		});
		return fragment;
	},

	_updateValueInTarget() {
            this.properties.keyboardInputs.forEach((keyboard) => {
        keyboard.value = this.properties.value;
        });
		// Texten som användaren har skrivit
const text = this.properties.value.trim().toLowerCase();

// Här bestämmer du vilket ord som ska ge en länk
const valtOrd = "Tiden";
const altOrd = "tiden";
const ltOrd = "TIDEN";



// Elementet där länken ska visas
const result = document.getElementById("result");

if (text === valtOrd || text === altOrd || text === ltOrd) {
    result.innerHTML =
        '<a href="index15alt.html" >Gå vidare</a>';
} else {
    result.innerHTML = "fel";
}


	},

	_toggleCapsLock() {
		this.properties.capsLock =
			!this.properties.capsLock;

		for (let key of this.elements.keys) {
			if (key.childElementCount === 0) {
				key.textContent =
					this.properties.capsLock
						? key.textContent.toUpperCase()
						: key.textContent.toLowerCase();
			}
		}
	},

	open(initialValue, oninput) {
		this.properties.value =
			initialValue || "";
		this.elements.main
			.classList
			.remove("keyboard--hidden");
	},

	close() {
		this.properties.value =
			this.properties.value;
		this.elements.main
			.classList.add("keyboard--hidden");
	},
};

window.addEventListener("DOMContentLoaded", function () {
	Keyboard.init();
});