var CAT_DATA = [
  {
    name:"Mario",
    favFood: "Ham",
    img: "http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg"
  },
  {
    name:"Spot",
    favFood: "Replicated tuna",
    img: "http://www.catster.com/wp-content/uploads/2017/11/Angry-cat-growling-or-hissing-ears-back.jpg"
  },
  {
    name:"Sasha",
    favFood: "Steak",
    img: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name:"Rosalina",
    favFood: "Raw vegan tiramisu slice",
    img: "http://www.catster.com/wp-content/uploads/2017/08/A-brown-cat-licking-its-lips.jpg"
  }
];

var app = function() {
  CAT_DATA.forEach(function(cat) {
    addCat(cat.name, cat.favFood, cat.img);
  });
};

window.onload = app;
