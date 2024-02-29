# SAE MMI VisioConf

## Description

Ce projet est une application web de visio conférence développée dans le cadre du projet de la formation MMI de Toulon. MMI VISIOCONF est développée en fullstack JS avec NodeJS, ExpressJS, Socket.io, MongoDB et ReactJS. Elle s'inspire grandement des applications de communication telles que Discord ou encore Teams et elle est développée dans un objectif "open source" et peut être utilisée par n'importe qui.

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
-   NodeJS
-   ReactJS
-   ExpressJS
-   Socket.io
-   MongoDB
