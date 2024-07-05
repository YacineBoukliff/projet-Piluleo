function horloge() {
    const clockElement = document.querySelector('.clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Mettre à jour l'horloge toutes les secondes car le 1000 vaut 1 seconde
setInterval(horloge, 1000);

// Appel initial pour afficher l'heure immédiatement
horloge();