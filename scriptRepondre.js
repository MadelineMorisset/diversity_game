<script>
    
    // Répondre à une question

    function repondreQuestionQCM(questionspoints[numeroQuestion]) {  // revoir les paramètres
        button.addEventListener('click', traiterReponseQCM);
    }

    function repondreQuestionLibre(questionspoints[numeroQuestion]) {  // revoir les paramètres
        button.addEventListener('click', traiterReponseLibre);
    }


    // Traiter la réponse

    let reponseQCM;
    function traiterReponseQCM(questionPosee,reponseQCM) {
        if (reponseQCM == questionPosee.bonneReponse){
            console.log('victoire');
        }
        else { console.log('defaite');}
    }

    let reponseLibre;
    function traiterReponseLibre(questionPosee,reponseLibre) {
        for (let question of questionsPoints) {
            if (reponseLibre == question[reponsesPossibles]) {  // chercher une fonction pour chercher si une valeur est dans un tableau
                console.log('victoire');
            }
            else { console.log('defaite');}
        }
    }


    // Retirer la question du tableau

    document.addEventListener('click',()=>{
        questionspoints[numeroQuestion].splice(numeroQuestion,1)  // à voir
    });   


</script>
