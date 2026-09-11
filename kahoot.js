// =========================================================
// kahoot.js — Toggle dos tutoriais do Kahoot
// Mostra / esconde o tutorial escolhido
// =========================================================

(function () {
    'use strict';

    const btnIA = document.getElementById('btnIA');
    const btnManual = document.getElementById('btnManual');
    const tutorialIA = document.getElementById('tutorialIA');
    const tutorialManual = document.getElementById('tutorialManual');

    // Estado inicial
    if (tutorialIA) tutorialIA.style.display = 'none';
    if (tutorialManual) tutorialManual.style.display = 'none';

    function toggle(tutorial, outro) {
        if (!tutorial) return;

        if (tutorial.style.display === 'none') {
            tutorial.style.display = 'block';
            if (outro) outro.style.display = 'none';
        } else {
            tutorial.style.display = 'none';
        }
    }

    if (btnIA) {
        btnIA.addEventListener('click', () => {
            toggle(tutorialIA, tutorialManual);
        });
    }

    if (btnManual) {
        btnManual.addEventListener('click', () => {
            toggle(tutorialManual, tutorialIA);
        });
    }

})();
