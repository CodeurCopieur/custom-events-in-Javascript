# Custom events in Javascript

Grâce à l'utilisation du constructeur CustomEvent, nous pouvons créer nos propres événements personnalisés en Javascript.

Tout d'abord, nous ajoutons un écouteur d'événement sur un élément, lui donnant le nom de notre événement personnalisé et lui fournissant également une fonction de rappel comme d'habitude.

Lors de la distribution de l'événement, nous transmettons certaines données personnalisées à la fonction de gestionnaire d'événement/rappel à utiliser.