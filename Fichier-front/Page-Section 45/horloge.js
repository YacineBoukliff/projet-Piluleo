function actualiserHorloge() {
    const maintenant = new Date();
    
    const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const jour = jours[maintenant.getDay()];
    const date = maintenant.getDate().toString().padStart(2, '0');
    const mois = (maintenant.getMonth() + 1).toString().padStart(2, '0');
    const annee = maintenant.getFullYear();
    
    const heures = maintenant.getHours().toString().padStart(2, '0');
    const minutes = maintenant.getMinutes().toString().padStart(2, '0');
    const secondes = maintenant.getSeconds().toString().padStart(2, '0');
    
    const chaineDate = `${jour} ${date}/${mois}/${annee}`;
    const chaineHeure = `${heures}:${minutes}:${secondes}`;
    
    document.getElementById('horloge').textContent = `${chaineDate} ${chaineHeure}`;
}

// Mettre à jour l'horloge chaque seconde
setInterval(actualiserHorloge, 1000);

// Appeler la fonction une fois pour éviter un délai initial d'une seconde
actualiserHorloge();
(function() {
    let currentSize = 16;
    const minSize = 8;
    const maxSize = 32;

    function changeFontSize(change) {
        currentSize += change;
        currentSize = Math.max(minSize, Math.min(maxSize, currentSize));
        document.body.style.fontSize = currentSize + 'px';
    }

    function init() {
        const decreaseButton = document.getElementById('decreaseFont');
        const increaseButton = document.getElementById('increaseFont');

        decreaseButton.addEventListener('click', function() {
            changeFontSize(-1);
        });

        increaseButton.addEventListener('click', function() {
            changeFontSize(1);
        });
    }

    // Initialiser le script quand le DOM est chargé
    document.addEventListener('DOMContentLoaded', init);
})();





