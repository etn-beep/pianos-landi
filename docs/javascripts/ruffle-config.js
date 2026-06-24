window.RufflePlayer = window.RufflePlayer || {};

// FIX DIRECT POUR LES DOSSIERS MULTILINGUES (FR/ES)
window.RufflePlayer.config = {
    "publicPath": "https://tech-piano.com",
    "allowScriptAccess": true
};

window.addEventListener("load", (event) => {
    // Vérifie si Ruffle est bien chargé
    if (window.RufflePlayer && typeof window.RufflePlayer.newest === "function") {
        const ruffle = window.RufflePlayer.newest();
        
        // Détection simple des mobiles et tablettes
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // Applique les optimisations directement dans la configuration globale
        window.RufflePlayer.config.quality = isMobile ? "low" : "high";
        window.RufflePlayer.config.scale = isMobile ? "showAll" : "exactFit";
    }
});
