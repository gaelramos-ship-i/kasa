# Kasa

Kasa est une application web de location d'appartements développée avec **React** et **Vite**.

Ce projet a été réalisé dans le cadre de la formation **Développeur Web et Web Mobile** afin de valider les compétences liées au développement **front-end** d'une application web moderne.

---

## Présentation

L'application permet aux utilisateurs de :

* Consulter la liste des logements disponibles depuis la page d'accueil.
* Accéder à la fiche détaillée d'un logement via un routage dynamique.
* Découvrir les informations du logement :

  * galerie d'images ;
  * description ;
  * équipements ;
  * note ;
  * informations sur l'hôte ;
  * tags.
* Afficher une page **404** personnalisée lorsqu'une route est introuvable.

---

## Fonctionnalités

### Page d'accueil

* Affichage dynamique des logements à partir du fichier `src/data/logements.json`.
* Présentation de chaque logement sous forme de carte contenant :

  * une image ;
  * un titre ;
  * une localisation ;
  * une note représentée par des étoiles.

### Page de détail

* Navigation vers la fiche d'un logement via son identifiant.
* Carousel d'images.
* Affichage :

  * du titre ;
  * de la localisation ;
  * des tags ;
  * du nom et de la photo de l'hôte ;
* Sections **Description** et **Équipements** avec un composant *Collapse*.

### Page 404

* Affichage d'une page d'erreur lorsqu'une route n'existe pas.
* Lien permettant de revenir à la page d'accueil.

---

## Technologies utilisées

*  React
*  Vite
*  React Router DOM
*  Sass (SCSS)
*  JSON

---

## Structure du projet

```text
src/
├── assets/
├── components/      # Card, Collapse, Carousel, Navbar, Footer
├── data/            # logements.json
├── pages/           # Home, Details, NotFound
├── styles/          # Fichiers SCSS globaux et variables
├── App.jsx          # Configuration des routes
└── main.jsx         # Point d'entrée de l'application
```

---

## Objectifs pédagogiques

Ce projet m'a permis de mettre en pratique les compétences suivantes :

* Développer une interface avec React.
* Mettre en place un routage dynamique avec React Router.
* Créer des composants réutilisables.
* Manipuler des données au format JSON.
* Structurer une application React.
* Intégrer un design responsive avec Sass.
* Gérer les erreurs et les routes inexistantes.

---

## Auteur

**Gaël Ramos**
