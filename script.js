function showCrowdfunding() {
	const crowdfundingSection = document.getElementById("crowdfunding");
	crowdfundingSection.style.display = "flex";
}

window.addEventListener("load", function () {
	// Applica effetti SOLO su desktop
	if (window.innerWidth > 768) {
		setTimeout(function () {
			// Mostra l'immagine gradualmente
			const logo = document.querySelector(".scrittalogo img");
			logo.style.opacity = "1"; // Apparizione lenta

			// Mostra il paragrafo e spostalo lentamente
			const descrizione = document.getElementById("descrizione");
			setTimeout(() => {
				descrizione.style.opacity = "1"; // Appare gradualmente
				descrizione.style.transform = "translateX(-40px)"; // Sposta a sinistra
			}, 1000); // Aspetta 1 secondo dopo l'immagine
		}, 2000); // Attesa iniziale di 3 secondi
	}

	// Funzione per cambiare il testo del paragrafo sotto i 481px
	function cambiaTesto() {
		const paragrafo = document.getElementById("p1");
		if (window.innerWidth < 481) {
			paragrafo.innerHTML =
				'<br />In questa sezione potrai prenotare i tuoi biglietti per lo spettacolo. Una volta cliccato il bottone qui sotto <b>"Ottieni Biglietti"</b> segui questi semplici passaggi: <br />';
		}
		const titoloh4 = document.getElementById("titoloh4");
		if (window.innerWidth < 429) {
			titoloh4.innerHTML =
				"TORNA SABATO 22 FEBBRAIO alle <br /> ORE 12:00!";
		}
		if (window.innerWidth < 337) {
			titoloh4.style.fontSize = "15px";
		}
	}

	// Funzione per cambiare immagine sotto i 480px
	function cambiaImmagine() {
		const immagine = document.getElementById("logo"); // Assicurati che l'elemento abbia questo ID
		if (window.innerWidth < 481) {
			immagine.src = "./releonehtml/src/assets/logo2.png"; // Sostituisci con il percorso della nuova immagine
		} else {
			immagine.src = "./releonehtml/src/assets/RAFIKI_TITOLO.png"; // Ripristina l'immagine originale
		}
	}

	function scrollToSection(sectionId) {
		document
			.getElementById(sectionId)
			.scrollIntoView({ behavior: "smooth" });
	}

	// Creazione pulsanti di navigazione
	const sections = [
		{ id: "header-section", label: "Inizio" },
		{ id: "chisiamo", label: "Chi Siamo" },
		{ id: "crowdfunding", label: "Crowdfunding" },
		{ id: "photo-gallery", label: "Gallery" },
		{ id: "prenotazioni", label: "Biglietti" },
	];

	const navContainer = document.createElement("div");
	navContainer.id = "nav-buttons";
	navContainer.style.position = "fixed";
	navContainer.style.top = "10px";
	navContainer.style.right = "10px";
	navContainer.style.zIndex = "1000";
	navContainer.style.display = "flex";
	navContainer.style.flexWrap = "wrap";
	navContainer.style.gap = "10px";
	navContainer.style.padding = "15px";
	navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
	navContainer.style.borderRadius = "15px";
	navContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";

	sections.forEach((section) => {
		const button = document.createElement("button");
		button.innerText = section.label;
		button.style.padding = "12px 18px";
		button.style.border = "none";
		button.style.backgroundColor = "#FFD700";
		button.style.color = "#000";
		button.style.cursor = "pointer";
		button.style.fontSize = "16px";
		button.style.fontWeight = "bold";
		button.style.borderRadius = "8px";
		button.style.transition = "background-color 0.3s, transform 0.2s";
		button.style.flex = "1 1 auto"; // Adatta i bottoni per mobile
		button.addEventListener("click", () => scrollToSection(section.id));
		button.onmouseover = () => (button.style.backgroundColor = "#E5C100");
		button.onmouseout = () => (button.style.backgroundColor = "#FFD700");
		button.onmousedown = () => (button.style.transform = "scale(0.95)");
		button.onmouseup = () => (button.style.transform = "scale(1)");
		navContainer.appendChild(button);
	});

	document.body.appendChild(navContainer);

	// Esegui la funzione al caricamento della pagina
	cambiaTesto();
	cambiaImmagine();

	// Aggiungi un listener per cambiare il testo al resize della finestra
	window.addEventListener("resize", cambiaTesto);
	window.addEventListener("resize", cambiaImmagine);
});

updateImage();
window.addEventListener("resize", updateImage);
