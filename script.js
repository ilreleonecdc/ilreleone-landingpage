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

document.addEventListener("DOMContentLoaded", () => {
	const widget = document.querySelector("billetto-organiser-widget");
	if (widget && widget.shadowRoot) {
		const customStyle = document.createElement("style");
		customStyle.textContent = `.div-giallo{
    background-color: #face06 !important;
    display: flex !important;
    width: 100% !important;
    flex-direction: column !important;
    padding: 30px !important;
    justify-content: center !important;
    align-items: center !important;
}

.div-giallo h1{
    font-size: 3rem !important;
    background-color: #face06 !important;
    color: #2b3f8c !important;
}

.div-biglietti{
    padding: 30px !important;
    display: flex !important;
    flex-direction: row !important;
}

.div-biglietti p{
    font-size: clamp(1rem, 2vw, 28px) !important;
    width: 50% !important;
    text-align: center !important;
}`;
		widget.shadowRoot.appendChild(customStyle);
	}
});

updateImage();
window.addEventListener("resize", updateImage);
