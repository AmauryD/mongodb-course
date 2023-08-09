# ia-mongodb-cours-2021

## Installation

Pour installer le serveur: 

(veiller au LF)

docker compose up -d

## Se connecter à la machine docker

docker exec -it mongo-db /bin/bash

## Se connecter au serveur mongodb avec mongosh

mongosh --username root --authenticationDatabase admin --password

(le mot de passe est test123*)

## Commandes utiles

- show dbs : lister les bases de données
- use <db> : se connecter à une base de données
- show collections : lister les collections

db => représente le contexte courant (la base de données courante)

## Dossier workspace

Le dossier workspace est monté dans le container. Il est accessible dans le container dans /workspace.

## Raccourci 

Lorsque vous êtes dans le container, à la place de taper mongosh --username root --authenticationDatabase admin --password. Vous pouvez utiliser `bash connect.sh`.
