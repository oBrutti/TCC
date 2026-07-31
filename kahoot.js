// =========================================
// BOTÕES DOS TUTORIAIS
// =========================================


// Botões

const btnIA = document.getElementById("btnIA");

const btnManual = document.getElementById("btnManual");


// Tutoriais

const tutorialIA = document.getElementById("tutorialIA");

const tutorialManual = document.getElementById("tutorialManual");


// =========================================
// ESTADO INICIAL
// =========================================


// Começam escondidos

tutorialIA.style.display = "none";

tutorialManual.style.display = "none";


// =========================================
// BOTÃO IA
// =========================================

btnIA.addEventListener("click", function(){

    if(tutorialIA.style.display === "none"){

        tutorialIA.style.display = "block";

        tutorialManual.style.display = "none";

    }else{

        tutorialIA.style.display = "none";

    }

});


// =========================================
// BOTÃO MANUAL
// =========================================

btnManual.addEventListener("click", function(){

    if(tutorialManual.style.display === "none"){

        tutorialManual.style.display = "block";

        tutorialIA.style.display = "none";

    }else{

        tutorialManual.style.display = "none";

    }

});

