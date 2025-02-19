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
		const immagine = document.getElementById("immagine"); // Assicurati che l'elemento abbia questo ID
		if (window.innerWidth < 481) {
			immagine.src = "./releonehtml/src/assets/logo2.png"; // Sostituisci con il percorso della nuova immagine
		} else {
			immagine.src = "./releonehtml/src/assets/RAFIKI_TITOLO.png"; // Ripristina l'immagine originale
		}
	}

	// Esegui la funzione al caricamento della pagina
	cambiaTesto();
	cambiaImmagine();

	// Aggiungi un listener per cambiare il testo al resize della finestra
	window.addEventListener("resize", cambiaTesto);
	window.addEventListener("resize", cambiaImmagine);
});

updateImage();
window.addEventListener("resize", updateImage);
