   let bonus = [
            {
                text : 'On vous félicite pour avoir géré votre projet de main de maître ! Avancez de 2 cases !',
                action : '+2',
            },
            {
                text    : 'Votre entreprise vient de recevoir le prix “Diversity” ! Félicitations ! Avancez de 3 cases !',
                action : '+3',
            },
            {
                text : 'Vous militez pour l’inclusion de tous au sein de la société. Votre action commence à porter ses fruits. Avancez de 1 case.',
                action : '+1',
            },
            {
                text : 'Vous avez fait forte impression à votre entretien d’embauche : vous avez maintenant un nouvel emploi. Félicitations ! Avancez de 2 cases !',
                action : '+2',
            },
            {
                text : 'Un(e) de vos collaborateurs(trices) a un handicap. Vous le(la) soutenez. Avancez de 3 cases.',
                action : '+3',
            },
            {
                text : 'Vous faites preuve d’empathie et d’écoute envers les autres. Rejouez.',
                action : 'Rejouer',
            },
            {
                text : 'Vous avez l’esprit d’équipe. Votre optimisme entraîne les autres ! Rejouez !',
                action : 'Rejouer',
            },
            {
                text : 'Un(e) de vos collègues fait sans cesse des remarques déplacées à un(e) autre. Faites-le (la) lui remarquer et reculez son pion de 2 cases.',
                action : '-2',
            },
            {
                text : 'Vous avez reçu un mail d’un de vos collègues écrit en langage SMS. Vous ne comprenez rien ! Reculez le pion d’un de vos adversaires de 2 cases.',
                action : '-2',
            }
        ];
        
        let malus = [
            {
                text : 'Vous êtes en retard pour rendre votre projet ! Votre client est furieux ! Reculez de 2 cases !',
                action : '-2',
            },
            {
                text : 'Vous cherchez un emploi. Fatigué(e) d’écrire ces lettres de motivation, vous décidez d’envoyer la même à chaque employeur. Grossière erreur !! Reculez de 3 cases !',
                action : '-3',
            },
            {
                text : 'Vous recherchez un nouveau collaborateur. Parmi les CV que vous recevez, vous ne retenez que les hommes qui ont un nom à consonance européenne. C’est de la discrimination ! Passez votre tour !',
                action : 'Passer',
            },
            {
                text : 'Vous venez d’apprendre que l’un de vos proches est homosexuel(le). Depuis, vous ne lui parlez plus. De quoi avez-vous peur ? Reculez de 2 cases !',
                action : '-2',
            },
            {
                text : 'Vous avez fait une formation pour apprendre votre métier il y a 10 ans. Depuis, vous n’avez rien appris de plus. Ne connaissez-vous pas la veille ? Reculez de 1 case !',
                action : '-1',
            },
            {
                text : 'Vous pensez que tous les handicapés sont en fauteuil roulant ? Pas du tout ! Reculez de 2 cases !',
                action : '-2',
            },
            {
                text : 'Vous êtes agressif(ve) dans vos propos. Apprenez à utiliser la communication non violente. Reculez de 3 cases !',
                action : '-3',
            },
            {
                text : 'Vous êtes venu(e) à votre entretien d’embauche dans une tenue négligée. La prochaine fois, pensez à soigner votre présentation. Reculez de 1 case.',
                action : '-1',
            },
            {
                text : 'Vous avez envoyé un mail rempli de fautes d’orthographes à votre supérieur(e). Reculez de 2 cases.',
                action : '-2',
            },
        ];

        let questionsCommence = [
            {
                condition : 'La personne assise le plus près des toilettes commence la partie',
                icone : 'img/iconeToilette.png'
            },
            {
                condition : 'La personne qui s’est levé le plus tard aujourd’hui commence la partie',
                icone : 'img/iconeReveil.png'
            },
            {
                condition : 'La personne qui est la plus petite commence la partie',
                icone : 'img/iconeGens.png'
            },
            {
                condition : 'La personne qui a menti le plus récemment commence la partie',
                icone : 'img/iconePinocchio.png'
            },
            {
                condition : 'La personne la plus jeune commence la partie',
                icone : 'img/iconeBebe.png'
            },
            {
                condition : 'La personne qui a consommé de la bière le plus récemment commence la partie',
                icone : 'img/iconeBiere.png'
            },
            {
                condition : 'La personne qui a été malade le plus récemment commence la partie',
                icone : 'img/iconeTemperature.png'
            },
            {
                condition : 'La personne qui a la coupe de cheveux la plus ringarde commence la partie',
                icone : 'img/iconePeigne.png'
            },
            {
                condition : 'La personne qui a la tenue la plus colorée commence la partie',
                icone : 'img/iconeBouffon.png'
            },
            {
                condition : 'La personne qui a la tenue la plus élégante commence la partie',
                icone : 'img/iconemarier.png'
            },
            {
                condition : 'La personne qui a le plus de tatouages commence la partie ',
                icone : 'img/iconeTatouer.png'
            },
            {
                condition : 'La personne qui a visité le plus de pays commence la partie ',
                icone : 'img/iconeAvion.png'
            },
            {
                condition : 'La personne qui a le plus faim en ce moment commence la partie',
                icone : 'img/iconeTacos.png'
            },
            {
                condition : 'La personne qui a le téléphone portable le plus ancien commence la partie',
                icone : 'img/iconeTelephone.png'
            },
            {
                condition : 'La personne qui a le nez le plus long commence la partie',
                icone : 'img/iconeNez.png'
            },
            {
                condition : 'La personne qui a le plus de cheveux blancs commence la partie',
                icone : 'img/iconeVieux.png'
            },
            {
                condition : 'La personne la plus hyperactive commence la partie ',
                icone : 'img/iconeSport.png'
            },
            {
                condition : 'La personne qui a eu la journée la plus désagréable commence la partie ',
                icone : 'img/iconeAccident.png'
            }

        ]

        let questions1point = [
            {
                question : 'Le handicap est la 5ème cause de discrimination en France.',
                reponsesPossibles : ['Vrai','Faux'],
                bonneReponse : 'Faux'
            },
            {
                question : 'La discrimination peut-elle être légale ?',
                reponsesPossibles : ['Oui','Non'],
                bonneReponse : 'Oui'
            },
            {
                question : 'Mon collègue Jean fait une plaisanterie à propos de la poitrine de la nouvelle stagiaire.',
                reponsesPossibles : ['J’éclate de rire. Ce type est trop drôle !','« Pardon Jean ? Qu’est-ce que tu as dit là?? »'],
                bonneReponse : '« Pardon Jean ? Qu’est-ce que tu as dit là?? »'
            },
            {
                question : 'Le pourcentage de personnes handicapées de naissance est de 85%.',
                reponsesPossibles : ['Vrai','Faux'],
                bonneReponse : 'Faux'
            },
            {
                question : 'Les savoir-être sont innés ou acquis ?',
                reponsesPossibles :['Innés','Acquis'],
                bonneReponse : 'Acquis'
            },
            {   
                question : 'La majorité des personnes en situation de handicap se déplace en fauteuil.',
                reponsesPossibles :['Vrai','Faux'],
                bonneReponse : 'Faux'
            },
            {
                question : 'Quelle est l’idée qui sous-tend le sexisme ?',
                reponsesPossibles :['Les hommes ne devraient pas draguer les femmes.','Certaines personnes sont considérées comme inférieures à cause de leur sexe. '],
                bonneReponse : 'Certaines personnes sont considérées comme inférieures à cause de leur sexe.'
            },
            {
                question : 'L’empathie est nécessaire pour pratiquer l’écoute active ',
                reponsesPossibles :['Vrai','Faux'],
                bonneReponse : 'Vrai'
            },
            {
                question : 'Pour faire un CV (Curriculum Vitae) on répertorie les expériences de manière chronologique ',
                reponsesPossibles :['Vrai','Faux'],
                bonneReponse : 'Vrai'
            },
            {
                question : 'Les CPS (Compétences psychosociales) améliorent : (deux choix possible)  ',
                reponsesPossibles :['L’employabilité','La santé mentale','Le savoir-être'],
                bonneReponse : ['L’employabilité','Le savoir-être']
            },
            {
                question : 'On utilise le tutoiement par défaut en milieu professionnel ',
                reponsesPossibles :['Vrai','Faux'],
                bonneReponse : 'Faux' 
            },
            {
                question : 'Je veux entamer un projet, je fais appel à quel outil ? ',
                reponsesPossibles :['SWOT','SWAT'],
                bonneReponse : 'SWOT' 
            },
            {
                question : 'En milieu professionnel on favorise l’efficience ou l’efficacité ? ',
                reponsesPossibles :['Efficience','Efficacité'],
                bonneReponse : 'Efficience'
            }
                
        ];
        let questions2points = [
            {
                question : 'Que signifie RQTH ?',
                reponsesPossibles : ['Réservé qualification travailleur handicapé','Reconnaissance de la qualité de travailleur handicapé','Reconnu et qualifié travailleur handicapé'],
                bonneReponse : 'Reconnaissance de la qualité de travailleur handicapé',
            },
            {
                question : 'La discrimination est-elle forcément intentionnelle ?',
                reponsesPossibles : ['Oui, toujours','Pas toujours','Non, jamais'],
                bonneReponse : 'Pas toujours',
            },
            {
                question : 'Qu’est qu’un pitch de présentation ?',
                reponsesPossibles : ['Une brioche ?','Une pub pour nous promouvoir ?','Une histoire qui résume notre parcours, nos qualités, nos projets professionnels ?'],
                bonneReponse : 'Une histoire qui résume notre parcours, nos qualités, nos projets professionnels ?',
            },
            {
                question : 'Que veut dire pour vous le sens critique ?',
                reponsesPossibles : ['Démolir systématiquement tout avis contraire du votre !','b.  Critiquer ? Je ne critique absolument rien ! alors là ! bravo ! vous êtes un humain incroyable.','Apprendre à raisonner et s’ouvrir aux autres ! Vous verrez ce n’est pas si mal !'],
                bonneReponse : 'Apprendre à raisonner et s’ouvrir aux autres ! Vous verrez ce n’est pas si mal !',
            },
            {
                question : 'Pour écrire une lettre de motivation l’ordre de rédaction est le suivant :',
                reponsesPossibles : ['Vous, Moi, Nous','Moi, Vous, Nous','Nous, Moi, Vous'],
                bonneReponse : 'Vous, Moi, Nous',
            },
            {
                question : 'Quels sont les canaux de communication utilisés en milieu professionnel ?',
                reponsesPossibles : ['Le pigeon voyageur','Le mail','Un système de pyrogravure'],
                bonneReponse : 'Le mail',
            },
            {
                question : 'Savez – vous les méthodes utiliser pour la réalisation d’un CV citoyen ?',
                reponsesPossibles : ['Les méthodes STAR et BACK, là on voyage !','Les méthodes étoiles et retour. Bah oui c’est mieux en français','Les méthodes Ail et Fines herbes pour donner plus de goût'],
                bonneReponse : 'Les méthodes STAR et BACK, là on voyage !',
            },
            {
                question : 'Comment identifier ses motivations sur une offre qui nous intéresse ?',
                reponsesPossibles : ['On les découvrira bien au moment de l’entretien','Regarder une vidéo de présentation sur Youtube en se disant «Hey ça a l’air pas mal»','Analyser l’offre (secteur, salaire) et se renseigner sur l’entreprise'],
                bonneReponse : 'Analyser l’offre (secteur, salaire) et se renseigner sur l’entreprise',
            },
            {
                question : 'Comment rédiger un mail de motivation ?',
                reponsesPossibles : ['Avoir un mail professionnel et utiliser des formules de politesse allégées','Utiliser un mail du style bg86@yahoo.fr et se servir d’un langage familier','Demander à ChatGPT (AI) de rédiger le mail a notre place'],
                bonneReponse : 'Avoir un mail professionnel et utiliser des formules de politesse allégées',
            },
            {
                question : 'Quel est le pourcentage de communication verbale dans notre communication générale ?',
                reponsesPossibles : ['7%','47%','27%'],
                bonneReponse : '7%',
            },
            {
                question : 'Dans la lettre de motivation il vaut mieux présenter :',
                reponsesPossibles : ['Les savoir être avec des exemples à l’appui','Les savoir faire avec des exemples à l’appui','Les savoir être et des savoir faire'],
                bonneReponse : 'Les savoir être avec des exemples à l’appui',
            },
            {
                question : 'C’est quoi le sketch note ?',
                reponsesPossibles : ['Une méthode pour écrire des notes avec un trait d’humour','Une méthode pour assurer le succès de son One-man show','Une méthode qui mélange la prise de note et le dessin'],
                bonneReponse : 'Une méthode qui mélange la prise de note et le dessin',
            },
            {
                question : 'Que signifie la méthode SMART ?',
                reponsesPossibles : ['Spécifique Mesurable Atteignable Relevant Temporellement','Satisfaction Mesurable Accessible Résultat Traumatisant','Sécurité Molle Anti-Résistance Téléphonique'],
                bonneReponse : 'Spécifique Mesurable Atteignable Relevant Temporellement',
            },
        ];


        let questions3points = [
            {
                question : 'Quelle est l’origine du mot handicap ?',
                reponsesPossibles : ['Du nom du Professeur Andy Kapp, médecin psychiatre autrichien connu pour sa description des déficiences mentales','C’était ainsi que l’on nommait les blessés de guerre au Moyen-Âge','D’un jeu de troc anglais','Du Dr Naismith,  inventeur du basketball'],
                bonneReponse : 'D’un jeu de troc anglais',
            },
            {
                question : 'Quel est le pourcentage de handicaps invisibles ?',
                reponsesPossibles : ['6%','15%','40%','80%'],
                bonneReponse : '80%',
            },
            {
                question : 'Discriminer c’est :',
                reponsesPossibles : ['Traiter de manière différente des personnes placées dans une situation comparable parce qu’on ne les aime pas','Traiter différemment des personnes placées dans une situation comparable, en se fondant sur leur couleur de peau, leur physique, leur religion, etc','Insulter des personnes à cause de leur couleur de peau, leur physique, leur religion, etc','Aimer une seule catégorie d’aliments'],
                bonneReponse : 'Traiter différemment des personnes placées dans une situation comparable, en se fondant sur leur couleur de peau, leur physique, leur religion, etc',
            },
            {
                question : 'Combien de critères de discrimination la loi définit-elle ?',
                reponsesPossibles : ['11','18','25','45'],
                bonneReponse : '25',
            },
            {
                question : 'Le droit condamne-t-il l’acte de discriminer ?',
                reponsesPossibles: ['Oui, la discrimination constitue un crime passible d’emprisonnement','Oui, la discrimination constitue un délit passible d’une amende et/ou d’emprisonnement','Oui, la discrimination est passible d’une contravention et d’une amende','Non, aucune sanction n’est prévue pour condamner l’acte de discriminer'],
                bonneReponse : 'Oui, la discrimination constitue un délit passible d’une amende et/ou d’emprisonnement',
            },
            {
                question : 'Selon un sondage réalisé par le Défenseur des droits en 2017 auprès d’un échantillon représentatif de la population française, quelle proportion perçoit les discriminations lors de la recherche d’un logement à louer comme une réalité fréquente, voire très fréquente ?',
                reponsesPossibles : ['2%','19%','46%','65%'],
                bonneReponse : '46%',
            },
            {
                question : 'Sommes-nous tou(te)s concerné(e)s par la discrimination ?',
                reponsesPossibles : ['Oui, nous sommes tou(te)s potentiellement discriminé(e)s','Oui, nous sommes tou(te)s potentiellement discriminant(e)s','Oui, nous sommes tou(te)s potentiellement discriminé(e)s et discriminant(e)s','Non, ça n’existe pas on vit dans le monde des bisounours'],
                bonneReponse : 'Oui, nous sommes tou(te)s potentiellement discriminé(e)s et discriminant(e)s',
            },
            {
                question : 'Quel est le quota de travailleurs en situation de handicap obligatoire pour les entreprises de plus de 20 salariés ?',
                reponsesPossibles : ['Pas de quota','2%','4%','6%'],
                bonneReponse : '6%',
            },
            {
                question : 'Une Maison des Personnes Handicapées (MDPH) est mise en place dans :',
                reponsesPossibles : ['Chaque région','Chaque département','Chaque commune','Uniquement à Paris'],
                bonneReponse : 'Chaque département',
            },
            {
                question : 'Quel célèbre compositeur était atteint de surdité ?',
                reponsesPossibles : ['Ludwig Van Beethoven','Wolfgang Mozart','Antonio Vivaldi','Prince'],
                bonneReponse : 'Ludwig Van Beethoven',
            },
            {
                question : 'En quelle année la loi pour l’égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées a-t-elle été créé ?',
                reponsesPossibles : ['Le 10 juillet 1987','Le 23 octobre 1990','Le 11 février 2005','En 1905'],
                bonneReponse : 'Le 11 février 2005',
            },
            {
                question : 'Que veut dire la méthode QQOQCCP ?',
                reponsesPossibles : ['Une méthode qui manque de voyelles ?','Qu’est Qu’On Quoi Croiver Cette Poulette ! Oui c’est une phrase populaire !','Une méthode créée par les Japonais pour gérer le temps !','Quoi Qui Où Quand Comment Combien Pourquoi ! Beaucoup de questions laissées sans réponses...'],
                bonneReponse : 'Quoi Qui Où Quand Comment Combien Pourquoi ! Beaucoup de questions laissées sans réponses...',
            },
            {
                question : 'Les compétences CPS sont catalogués en 3 catégories. Mais lesquelles ?',
                reponsesPossibles : ['Les compétences comportementales, cognitives, techniques','Les compétences sectorielles, sociales, techniques','Les compétences sensorielles, sectorielles, cognitives','Les compétences sociales, émotionnelles, cognitives'],
                bonneReponse : 'Les compétences sociales, émotionnelles, cognitives',
            },
        ];

        let questions4points = [
            {
                question : 'Que signifie le « O » de SWOT ?',
                bonneReponse : ['Opportunités','Opportunities'],
            },
            {
                question : 'Qu’est que l’employabilité ?',
                bonneReponse : ['les compétences du salarié','compétences du salarié'],
            },
            {
                question : 'Citer 2 profils de gestion de temp',
                bonneReponse : ['Empathique','Travaillomane','Persévérant','Rebelle','Rêveur','Promoteur'],
            },
            {
                question : 'Citer une des clés pour une communication non violente',
                bonneReponse : ['Observer','Sentiment','Besoin','Demande'],
            },
            {
                question : 'Citer 2 qualités pour avoir une communication efficace',
                bonneReponse : ['Empathie','Bienveillance','Ecoute active','Assertivité'],
            },
            {
                question : 'Citer 2 émotions',
                reponsesPossibles : ['joie','colère','tristesse','peur','dégout','surprise'
                ]
            },
            {
                question : 'Je prends les choses comme elles viennent, je ne prépare jamais mes réunions « j’y vais au talent ». Quel est mon profil de gestion de temps ?  ',
                reponsesPossibles : ['Profil Rebelle','Rebelle']
            },
            {
                question : 'Citer deux méthodes pour retenir des informations en entreprises ?',
                reponsesPossibles : ['Le chunking', 'la carte mentale', 'la fiche mémo', 'la prise de notes']
            },
            {
                question : 'Qui est affecté par le sexisme et les comportements sexistes ?',
                reponsesPossibles : ['Les femmes','les filles','sexe féminin']
            },
            {
                question : 'Citer 2 types de communicant ?',
                reponsesPossibles : ['Promouvant', 'facilitant', 'contrôlant', 'analysant']
            },
            {
                question : 'Quelle est la signification du S dans SWOT ?',
                reponsesPossibles : ['Strength', 'force']
            },
        ];


  
  