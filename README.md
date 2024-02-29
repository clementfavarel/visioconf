# SAE MMI VisioConf

## Description

Ce projet consiste à développer une application web qui s'apparente à d'autres applications comme Teams ou Discord.<br>
Le projet est porté et réalisé par des étudiants de la formation MMI de l'Université de Toulon.

## Prérequis

-   [docker](https://www.docker.com/)
-   [docker-compose](https://docs.docker.com/compose/)

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/clementfavarel/visioconf.git
```

2. Se rendre dans le dossier du projet :

```bash
cd visioconf
```

3. Lancer le projet :

**Mode DEV** :

```bash
cd src
docker-compose -f compose.yml -f compose.dev.yml up
```

**Mode PROD** :

```bash
cd src
docker-compose -f compose.yml -f compose.prod.yml up
```

## Utilisation

Une fois le projet lancé, vous pouvez vous rendre sur [http://localhost:3000](http://localhost:3000) pour accéder à l'application.

## Technologies utilisées

-   Docker
-   Docker-compose
-   Nginx
-   NodeJS
-   ReactJS
-   ExpressJS
-   Socket.io
-   MongoDB
