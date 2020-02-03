var ore = 15000;
var clickMultiplier = 0;
var automaticMultiplier = 0;
var oreElem = document.getElementById("ore");
var pickElem = document.getElementById("pickaxe");
var jackElem = document.getElementById("jackhammer");
var cartElem = document.getElementById("cart");
var truckElem = document.getElementById("truck");
var clickElem = document.getElementById("click-multiplier");
var pPriceElem = document.getElementById("p-price");
var jPriceElem = document.getElementById("j-price");
var cPriceElem = document.getElementById("c-price");
var tPriceElem = document.getElementById("t-price");


var clickUpgrades = {
  pickaxe: {
    price: 50,
    quantity: 0,
    multiplier: 1,
  },
  jackhammer: {
    price: 500,
    quantity: 0,
    multiplier: 5,
  }
}

var automaticUpgrades =
  [
    {
      name: "cart",
      price: 1000,
      quantity: 0,
      multiplier: 50,
    },
    {
      name: "truck",
      price: 10000,
      quantity: 0,
      multiplier: 750,
    }
  ]


function collectAutoUpgrades() {
  let modOne = automaticUpgrades[0].quantity * automaticUpgrades[0].multiplier;
  ore += modOne;
  let modTwo = automaticUpgrades[1].quantity * automaticUpgrades[1].multiplier;
  ore += modTwo;
  update();
}

function mine() {
  ore++;
  ore += clickMultiplier;
  update();
}

function interval() {
  setInterval(collectAutoUpgrades, 3000)
}

// this will increase amount mined per click based on click-multiplier//
function updateMultiplier() {
  clickElem.textContent = "+" + clickMultiplier.toString();
}

function update() {
  oreElem.textContent = ore.toString();
  pickElem.textContent = clickUpgrades.pickaxe.quantity.toString();
  jackElem.textContent = clickUpgrades.jackhammer.quantity.toString();
  cartElem.textContent = automaticUpgrades[0].quantity.toString();
  truckElem.textContent = automaticUpgrades[1].quantity.toString();
}

function buyPickaxe() {
  // console.log(pickaxeModPrice)
  if (ore >= clickUpgrades.pickaxe.price) {
    clickUpgrades.pickaxe.quantity++;
    ore -= clickUpgrades.pickaxe.price;
    clickMultiplier += clickUpgrades.pickaxe.multiplier;
    updateMultiplier();
    update();
    console.log();
  }
  clickUpgrades.pickaxe.price += Math.floor((clickUpgrades.pickaxe.quantity * clickUpgrades.pickaxe.price * .10));
  pPriceElem.textContent = clickUpgrades.pickaxe.price.toString();
}
//this function dynamically draws the player's resources in Resources column//
function buyJackhammer() {
  if (ore >= clickUpgrades.pickaxe.price) {
    clickUpgrades.jackhammer.quantity++;
    ore -= clickUpgrades.jackhammer.price;
    clickMultiplier += clickUpgrades.jackhammer.multiplier;
    updateMultiplier();
    update();
  }
  clickUpgrades.jackhammer.price += Math.floor((clickUpgrades.jackhammer.quantity * clickUpgrades.jackhammer.price * .10));
  jPriceElem.textContent = clickUpgrades.jackhammer.price.toString();
}
function buyCart() {
  if (ore >= automaticUpgrades[0].price) {
    automaticUpgrades[0].quantity++;
    ore -= automaticUpgrades[0].price;
    automaticMultiplier += automaticUpgrades[0].multiplier;
    update();
    updateMultiplier();
    interval();
  }
  automaticUpgrades[0].price += Math.floor((automaticUpgrades[0].quantity * automaticUpgrades[0].price * .10));
  cPriceElem.textContent = automaticUpgrades[0].price.toString();
}
function buyTruck() {
  if (ore >= automaticUpgrades[1].price) {
    automaticUpgrades[1].quantity++;
    ore -= automaticUpgrades[1].price;
    automaticMultiplier += automaticUpgrades[1].multiplier;
    update();
    updateMultiplier();
    interval();
  }
  automaticUpgrades[1].price += Math.floor((automaticUpgrades[1].quantity * automaticUpgrades[1].price * .10));
  tPriceElem.textContent = automaticUpgrades[1].price.toString();
}

