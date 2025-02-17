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

window.onload = function () {
	setTimeout(() => {
		const widget = document.querySelector("billetto-organiser-widget");
		if (widget && widget.shadowRoot) {
			let style = document.createElement("style");
			style.textContent = `
                .billetto-container {
                    background-color: white !important;
                    color: black !important;
                    font-family: Arial, sans-serif !important;
                }

                button {
                    background-color: #face06 !important;
                    color: black !important;
                    border-radius: 10px !important;
                }
            `;
			widget.shadowRoot.appendChild(style);
		}
	}, 1000);
};

updateImage();
window.addEventListener("resize", updateImage);
