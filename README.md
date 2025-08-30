# maquette figma

cette maquette a été designer pour répondre à un test
Lien : https://www.figma.com/design/Isyl8U6q7SaJYaPwCWN8vn/Untitled?node-id=2-199&t=gRJN0uYd5umY2qbo-1

# repo git

Lien : https://github.com/Andersn8/test-lead-frontend
ce repo heberge le projet qui a été implementé durant ce test

# NB ------------------- si vous n'êtes pas dans le projet : taper la commande cd testFront

après avoir cloné le projet sur git ::

- taper les commandes :

  > npm install -- pour installer les dependances npm
  > npm i json-server -- qui nous servira de serveur de base de données pour plus d;info aller sur le site : https://www.npmjs.com/package/json-server

  -- (pour nous, notre bd est testFront/src/backend/ )

  > ng add @angular/material -- pour installer l'utilisation des mat-icon
  > npm i -g boostrap -- pour installer boostrap

  # après utilisation des dépendances

  > npx json-server /src/backend/db.json-- pour lancer le serveur de base de données
  > ng serve ------- pour lancer le client angular

  ~ Une fois le client lancé connectez vous avec les identifiant des utilisateurs contenus en base
  ~ Dans notre cas notre bd est le fichier db.json

  # ID à utiliser

  username : anderson
  password : password001

- une fois connecté vous serez redirigé sur le dahsboord pour pourez par la suite naviger entre les pages (transaction et virement)

# transaction page

dans la vu transaction vous avez la liste des transaction contenu dans notre bd (la recherche via la description est fonctionnelle )

# virement page

vous pourez faire un nouveau virement (cela ajoutera un nouveau virement dans notre base)

#### ----------- c'est tout pour le moment merci ~

## Problème lié au localStorage pour avoir accès aux donnéees de l'utilisateur connecté et limiter les appels http

Principales corrections apportées :

# 1. AuthService amélioré :

> BehaviorSubject : Ajout d'un BehaviorSubject pour notifier automatiquement tous les composants des changements d'état de connexion
> Initialisation : Le service vérifie maintenant au démarrage s'il y a un utilisateur stocké dans le localStorage

    Méthode sync : Ajout d'une méthode getCurrentUserSync() pour obtenir l'utilisateur de façon synchrone si nécessaire

# 2. HeaderComponent optimisé :

> Subscription reactive : Utilisation de currentUser$ observable pour réagir aux changements d'utilisateur en temps réel
> nDestroy : Implémentation de OnDestroy pour éviter les fuites mémoire

Gestion d'état : Mise à jour automatique de isLoggedIn quand l'utilisateur change

# 3. LoginComponent simplifié :

Logique simplifiée : Suppression de la logique manuelle de vérification des utilisateurs
Gestion d'erreurs : Meilleure gestion des erreurs avec les observables
État de chargement : Ajout d'un indicateur loginInProgress
Vérification initiale : Redirection automatique si l'utilisateur est déjà connecté

# 4. Avantages de ces corrections :

Réactivité : Les composants se mettent à jour automatiquement quand l'état de connexion change
Cohérence : Une seule source de vérité pour l'état de l'utilisateur
Performance : Évite les fuites mémoire et les vérifications répétées
Simplicité : Code plus maintenable et moins sujet aux erreurs
