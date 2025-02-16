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
				descrizione.style.transform = "translateX(-50px)"; // Sposta a sinistra
			}, 1000); // Aspetta 1 secondo dopo l'immagine
		}, 2000); // Attesa iniziale di 3 secondi
	}
});

function updateImage() {
	const image = document.getElementById("logo");
	if (window.innerWidth <= 480) {
		image.src = "./releonehtml/src/assets/logo2.png";
	} else {
		image.src = "./releonehtml/src/assets/RAFIKI_TITOLO.png";
	}
}

function caricaWidget() {
	var container = document.getElementById("widget-container"); // Un contenitore dove inserire il widget

	// Verifica la larghezza della finestra
	if (window.innerWidth <= 768) {
		// Carica il widget per cellulare
		container.innerHTML =
			'<script src="https://billetto.it/widget.js"></script>' +
			'<billetto-organiser-widget type="list" organiser="6095917" organization="billetto.it" lang="it" theme="dark" color="#face06" include-private></billetto-organiser-widget>';
	} else {
		// Carica il widget per desktop
		container.innerHTML =
			'<script src="https://billetto.it/widget.js"></script>' +
			'<billetto-organiser-widget type="calendar" organiser="6095917" organization="billetto.it" lang="it" theme="dark" color="#face06" include-private></billetto-organiser-widget>';
	}
}

window.onload = caricaWidget;
window.onresize = caricaWidget;

updateImage();
window.addEventListener("resize", updateImage);
