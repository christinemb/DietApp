angular.module('DietApp.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Nibbles', 'Fish & Shellfish', 'Vegetables & Pulses', 'Meats'];
});
.controller('DishesCtrl', function($scope, $stateParams) {
   categories = ['Nibbles', 'Fish & Shellfish', 'Vegetables & Pulses', 'Meats'];

  dishes = [
    [
      "almonds",
      "olives",
      "anchovies, piquillo peppers, caperberries",
      "pork crackling, mushroom salt",
    ],
    [
      "octopus, smoked paprika, potatoes, px vinegar",
      "salted cod cakes, lemon aioli",
      "cured salmon, piquillo pepper, smoked scallop roe aioli",
      "scallops, black pudding, cauliflower purée, lardo, oats",
      "basque style monkfish, parsley mayonnaise",
      "clams, chorizo, sherry ",
      "squid, garlic, salt, parsley, lemon",
      "mussels, almonds, white wine",
      "crab, piquillo pepper, pickled kohl-rabi, black olive soil",
    ],
    [
      "tortilla, romesco",
      "patatas bravas",
      "wild mushrooms, organic cider, garlic",
      "chickpea, spinach, tomato sauce",
      "goat’s cheese & sweet potato croquettes (v)",
      "tomato bread, olive oil",
      "catalan spinach",
      "lentils, saffron, cumin, organic vegetables",
      "catalan ratatouille",
      "moorish couscous, rose petals, hay smoked yoghurt",
      "goat’s cheese, piquillo peppers, walnut powder",
      "organic beetroot, pine nuts, px sherry",
      "organic green leaves, chicory, hazelnuts",
      "wild mushroom & pea paella",
    ],
    [
      "jamón croquettes, saffron aioli",
    "beef cheek, jerusalem artichoke purée, apple, oats, leek ash",
      "rack of lamb, confit lamb belly, cauliflower purée",
    "pigs head fritter, beetroot purée, pickled beetroot,hazelnuts",
      "free range duck, plum, px sherry",
      "moorish chicken, piquillo pepper sauce, black olive soil",
      "hay smoked quail, foie gras, quince, px sherry",
      "confit pork belly, apple compote, thyme gel",
      "free range pork fillet, serrano ham, apricots, sherry",
     "chorizo, potatoes, red wine",
      "meatballs, tomato sauce",
      "pork neck, migas, morcilla, piquillo pepper",
      "chicken breast, walnuts, chicory, carrot purée, walnut powder",
     "potatoes, serrano ham, cherry tomatoes, garlic",
     "chicken hearts, chorizo, cider",
     "beef & foie gras burgers, manchego, piquillo pepper",
      "tomato bread, serrano ham, olive oil",
      "pig cheeks, apple, sultanas, tomato sauce",
      "chorizo, sherry",
      "black pudding, chickpeas, raisins, pine nuts, parsley",
    ]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
 $scope.dishes = dishes[$stateParams.dishesId];

 });
 
