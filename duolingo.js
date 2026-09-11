```javascript
// =========================================================
// duolingo.js — Toggle dos conteúdos do Duolingo
// Mostra / esconde o conteúdo escolhido
// =========================================================

(function () {
    'use strict';

    const btnUso = document.getElementById('btnUso');
    const btnEducacao = document.getElementById('btnEducacao');
    const tutorialUso = document.getElementById('tutorialUso');
    const tutorialEducacao = document.getElementById('tutorialEducacao');

    // Estado inicial
    if (tutorialUso) tutorialUso.style.display = 'none';
    if (tutorialEducacao) tutorialEducacao.style.display = 'none';

    function toggle(tutorial, outro) {
        if (!tutorial) return;

        if (tutorial.style.display === 'none') {
            tutorial.style.display = 'block';

            if (outro) {
                outro.style.display = 'none';
            }
        } else {
            tutorial.style.display = 'none';
        }
    }

    if (btnUso) {
        btnUso.addEventListener('click', () => {
            toggle(tutorialUso, tutorialEducacao);
        });
    }

    if (btnEducacao) {
        btnEducacao.addEventListener('click', () => {
            toggle(tutorialEducacao, tutorialUso);
        });
    }

})();
```
