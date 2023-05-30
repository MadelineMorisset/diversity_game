    
    // Répondre à une question

    function repondreQuestionQCM(questionPosee) {
        button.addEventListener('click', traiterReponseQCM);
    }

    function repondreQuestionLibre(questionPosee) {
        button.addEventListener('click', traiterReponseLibre);
    }



    // Retirer la question du tableau

    function retirerQuestionDuTableau(questionPosee) {
        questionPosee.splice(questionPosee,1)  
    } 



    // Traiter la réponse

    let reponseQCM;
    function traiterReponseQCM(questionPosee,reponseQCM) {
        if (reponseQCM == questionPosee.bonneReponse){
            console.log('victoire');
        }
        else { 
            console.log('defaite');
        }
        retirerQuestionDuTableau(questionPosee);
    }


    let reponseLibre;
    function traiterReponseLibre(questionPosee,reponseLibre) {
        if (reponseLibre == questionPosee.includes(reponseLibre)) {
            console.log('victoire');
        }
        else { 
            console.log('defaite');
        }
        retirerQuestionDuTableau(questionPosee);
    }
