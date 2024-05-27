# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Documentation Pulse SmarthPhone

Partie Client : 
Pulse Mobile qu’est-ce que c’est ?  
L'application va servir d'extension a Pulse qui est déployer sur le web. Disponible sur vos smartphones l’application permettra de simplifie la récupération des indicateurs présentes dans API REST. Il y'aura plusieurs versions de widgets, toute apporteront quelque chose de nouveau. Notamment un système de filtrage qui améliorera grandement la visibilité. 
Pourquoi le déployer sur mobile :
Le but être prévenus de tous incidents sur Pulse au travail comme à la maison. Le but est que l’utilisateurs soit notifier plus rapidement. 
Comment a-t-elle était pensée : 
Développé sur un schéma se basant sur un iPhone 14 pro max et d’un Samsung Galaxy S20 Ultra, Pulse Smartphone est utilisable de l’iPhone SE au 14 pro max et pour les Android.

Partie Développeur : 
L’application est développée sur React + Vite. 
Le serveur dev de react et l’API doit être lancer en même temps.
Si l’API n’est pas lancée alors les utilisateurs ne peuvent pas s’authentifier.
Il est conseillé de d’abord de faire un npm install pour tous re start (packages).
Le cmd pour lancer le serveur dev de react : npm run dev.
Pour aller plus vite on peut tous installer d’un coup puis lancer le serveur avec ce cmd :  npm install && npm run dev
Le cmd pour lanceur l’API : 
