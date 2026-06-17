window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    
    // Détection simple des mobiles et tablettes
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    ruffle.play({
        // Réduit la résolution de rendu à 50% sur mobile (très efficace pour la performance)
        // Garde 100% (1.0) sur ordinateur
        scale: isMobile ? 0.5 : 1.0,
        
        // Force une qualité de lissage plus basse sur mobile pour gagner encore plus de vitesse
        quality: isMobile ? "low" : "high",
        
        // Optionnel : limite à 30 images par seconde sur mobile si c'est encore lent
        frameRate: isMobile ? 30 : null 
    });
});   