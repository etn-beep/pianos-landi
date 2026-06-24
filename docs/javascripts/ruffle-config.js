// On s'assure d'initialiser proprement l'objet sans l'écraser
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = window.RufflePlayer.config || {};

// On force le chemin absolu AVEC le sous-dossier javascripts
window.RufflePlayer.config.publicPath = "https://tech-piano.com/javascripts/";
window.RufflePlayer.config.allowScriptAccess = true;

window.addEventListener("load", (event) => {
    if (window.RufflePlayer && typeof window.RufflePlayer.newest === "function") {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Optimisations mobiles sécurisées
        window.RufflePlayer.config.quality = isMobile ? "low" : "high";
    }
});
