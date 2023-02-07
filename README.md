# Launch Project

- Install Docker / Docker Desktop
- go to `/server` and run `yarn` or `npm install`
- go to `/front` and run `yarn` or `npm install`
- go to `/` and run `docker-compose up -d`
- go to `localhost:3000`

# Documentation du projet

## Demande du Client:
* Créer un réseau décentralisé de boutiques fédérées permettant aux commerçants de proposer à leurs clients le paiement et la livraison de leurs produits.

## Objectif:
* Proposer une solution complète que les commerçants pourront utiliser.
* Permettre à tous les commerçants d'être visibles et trouvables par une clientèle plus large, tout en conservant la souveraineté de leur boutique en ligne et de leur modèle économique.
* Proposer un prototype de la solution apportée

## Solutions:
* Un réseau de serveurs (instances) décentralisé (qui ne dépendent pas d’une entité centrale)
* Chaque serveur pourra accueillir plusieurs commerçants
* Chaque serveur aura un id qui permettra de l'identifier sur le réseau
* Possibilité de trouver les produits de tous les sites marchands du serveur ainsi que ceux des autres sites des serveurs connectés à l'instance actuelle. Les produits des serveurs connectés à ces autres serveurs seront aussi accessibles.
* Conserver la communication entre les différentes instances malgré leurs règles différentes
* Le premier marchand d'une instance sera désigné comme étant l'administateur du serveur
* Les administrateurs pourront:
    * Valider ou refuser l'ajout d'un commerçant dans leur instance
    * Choisir le mode de paiement disponible sur leur instance
    * Bloquer ou débloquer l'affichage des boutiques de certaines instances
* Les marchands pourront:
    * Disposer leurs produits en leur ajoutant une description, une image et un prix.
    * Modifier un article déja exposé, par exemple: son prix, son image et sa description
    * Supprimer un article de leur boutique
* Les clients pourront:
    * Parcourir les boutiques mises à disposition sur le réseau
    * Ajouter les produits qui les intéressent dans un panier
    * Annuler leur panier
    * Payer leur panier en utilisant le mode de paiement choisi par l'administrateur
    * Supprimer un article de leur panier
* La création d’un compte client sur une seule des instances permettra de:
    * Acheter des produits provenant de l'instance en question de manière classique
    * Passer commande chez les commerçants des autres instances connectées à cette instance; le paiement aura lieu sur l'autre instance mais une nouvelle inscription ne sera pas nécessaire.

## Mise en place:

Chaque instance du réseau sera une image Docker que le marchand devra télécharger puis lancer avec Docker. Dans cette image il y aura une API ainsi qu'une base de données. Une instance pourra contenir une ou plusieurs boutiques.
L'administrateur de l'instance en rentrant ses identifiants aura accès à une panneau d'administration dans lequel il pourra sélectionner quelles instances il souhaite rendre visible sur la sienne.

* Site Web:

Un site web servira d'interface graphique pour les clients, les marchands et l'administrateur du serveur.
Pour la partie Frontend du site web, elle sera faite à l’aide de ReactJS.
La partie Backend est en NodeJS et Express.
Le site web sera composé d’une page d'accueil où seront affichés les différents produits des boutiques.
![](/images_readme/Screenshot%20from%202023-02-06%2013-55-08.png)
Une page de création de compte:
![](/images_readme/Screenshot%20from%202023-02-06%2014-10-14.png)
Une page de connexion:
![](/images_readme/Screenshot%20from%202023-02-06%2014-13-30.png)
Une page pour ajouter un produit:
![](/images_readme/Screenshot%20from%202023-02-06%2014-35-39.png)
Une page d’administration:
![](/images_readme/Screenshot%20from%202023-02-06%2015-39-13.png)

* Base de Données:

Toutes les instances du réseau auront le même MLD ce qui facilitera l'interconnexion.

* Une table `Shop` qui contiendra des informations sur les boutiques hébergées par le serveur. Cela permettra aux API de se transmettre quelles boutiques sont disponibles sur leur instance.

* Une table `User` dans laquelle sera enregistré toutes les informations de l'utilisateur dont ses identifiants.

* Une table `Bag` qui représente les paniers clients.

* Une table `ipAdress` qui servira à stocker les adresses ip des autres API ainsi que l'id de la base de données.

* Enfin, une table `Article` pour contenir les informations des produits.

MLD de la base de données:
![](/images_readme/Screenshot%20from%202023-02-07%2016-50-13.png)

* API:

l'API sera en charge de l'interconnexion entre les différentes instances et va utiliser le protocole http pour communiquer avec les autres API du réseau.

Lorsqu'un client fera la recherche d'un produit qui ne se trouve pas dans les boutiques de l'instance actuelle, l'API, en s'appuyant sur la table `ipAdresse`, enverra les informations utilisateur ainsi que sa recherche aux autres API des autres instances qui vont chercher dans leur base de données si le produit recherché s'y trouve.

* Algorithme de consensus:

Il faudra mettre en place un algorithme qui puisse déterminer si une majorité des instances est d'accord pour modifier l'état du réseau.
C'est cet algorithme qui va faire appel aux instances du réseau pour déterminer si une nouvelle instance peut se connecter au réseau et quel id va lui être attribué. 

Toutes les instances vont calculer un nouvel id, selon une formule spécifique. En prenant en compte les ids déjà présents dans leur base de données, et une fois qu'une majorité d'instances est d'accord sur l'id, il sera transmis à la nouvelle instance qui le chiffrera et le gardera en mémoire dans un ficher. Les instances vont, dans leur table `ipAdresse`, ajouter le nouvel id du nouveau serveur ainsi que son adresse réseau. 

Elles vont ensuite communiquer à la nouvelle instance leur propre id et leur propre adresse réseau pour que le nouveau serveur puisse remplir sa table de toutes les instances du réseau.
<br><br>
## Technologies utilisées pour la réalisation du projet:

* ## Front end du site Web : React

![](/images_readme/React-icon.svg.png)

* ## Backend du site web : NodeJS et Express

![](/images_readme/express.png)
* ## SGBD du site web : Postgres

![](/images_readme/elephant.png)

* ## Déploiement des instances : Docker

![](/images_readme/Docker-Logo-White-RGB_Horizontal-730x189-1.png.webp)



## Limitation de cette solution

Le modèle de la base de données doit être le même pour toutes les instances pour garantir l'intégrité des informations. Cette contrainte est dû au fait qu'un utilisateur, qui crée un compte sur une instance, puisse utiliser ce même compte sur les autres serveurs du réseau.

## Améliorations possibles:

Une solution envisageable serait de mettre en place un autre modèle qui reposerait sur une blockchain chiffrée; les informations dans une blockchain sont immuables, elles ne peuvent plus être modifiées une fois enregistrées dedans sauf si une majorité des noeuds décident de les modifier. Cela résoudrait le fait que les informations dans une base de données traditionnelle puissent être modifiables après enregistrement. De plus, chaque noeud, et donc instance/serveur, possédera une copie de cette blockchain ce qui le rend indépendant d'un serveur central de base de données, ainsi, en cas de problèmes sur le réseau, chaque serveur pourra continuer de fonctionner.

Le choix d'une base de données traditionnelle a été fait dû à une contrainte de temps, la nature du projet nous imposait de rendre un prototype de solution en 48h ce qui rend compliqué la mise en place d'une blockchain valide.

Une autre amélioration serait de chiffrer les communications entres API.

## Réflexion IA&DATA:

L'une des questions qui peut émerger est : Comment proposer des suggestions d'achats fédérés aux utilisateurs enregistrés en fonction de leurs commandes déjà passées ?

2 algorithmes envisageables :
* Système basé sur le contenu : celui-ci se base sur les achats précédents de l'utilisateur pour lui proposer des articles similaires
* Système de type filtrage collaboratif : celui-là propose à l'utilisateur des articles achetés par d'autres utilisateurs similaires (ayant déjà acheté les mêmes articles) 
![image](/images_readme/IA.png)

Le premier est le plus facile à implémenter (et nécessite peu de données au départ) et les résultats seront facilement interprétables. Quelques étapes sont à respecter pour l'implémenter :
* Création d'un profil élément pour chaque article : description de l'article à l'aide de différentes caractéristiques (autrement dit création d'une liste de tags)
* Calcul de similarité entre un article déjà acheté et un nouvel article
* Proposition du nouvel article si la similarité dépasse un seuil (fixé au préalable)

La première étape nécessite de demander au commerçant de rentrer des tags lors de l'ajout d'un article à son catalogue, par exemple le type d'article, sa couleur, domaine d'utilisation etc. Ces données seront ensuite ajoutées à la table `Article` de la base de données. Il faudra également traiter et nettoyer ces données pour les homogénéiser, par exemple tous les accents pourront être supprimés, de même pour les majuscules.
Ensuite chaque produit devra être encodé dans une représentation numérique par une technique de vectorisation. La plus utilisée dans le traitement de documents est la TF-IDF (Term Frequency-Inverse Document Frequency). Cette méthode permet de générer une matrice 2D où les lignes représentent les articles et les colonnes représentent les tags associés. 
Le calcul de similarité entre les articles pourra alors prendre en entrée les lignes de cette matrice. La similarité cosinus pourra être utilisée. Il s'agit du produit scalaire entre deux vecteurs divisé par le produit de leurs normes. Le résultat est donc compris dans l'intervalle [-1;1], -1 indique deux vecteurs opposés et 1 indique deux vecteurs colinéaires donc avec une forte similarité.

Le site pourra alors afficher quelques articles basés sur l'historique des commandes passées par l'utilisateur.

## Organisation du projet:

Pour se répartir les tâches, nous nous sommes basés sur les compétences de chaque membre. Nous avons réalisé un tableau Kanban qui permettait de se repérer sur les tâches à faire, en cours et terminées.
![](/images_readme/Screenshot%20from%202023-02-07%2022-26-29.png)
