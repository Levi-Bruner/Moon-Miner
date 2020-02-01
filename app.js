var ore = 0;
var clickMultiplier = 0;
var automaticMultiplier = 0;
var oreElem = document.getElementById("ore");
var pickElem = document.getElementById("pickaxe");
var jackElem = document.getElementById("jackhammer");
var cartElem = document.getElementById("cart");
var truckElem = document.getElementById("truck");
var clickElem = document.getElementById("click-multiplier");


var clickUpgrades = {
  pickaxe: {
    price: 5,
    quantity: 0,
    multiplier: 1,
  },
  jackhammer: {
    price: 10,
    quantity: 0,
    multiplier: 10,
  }
}

var automaticUpgrades =
  [
    {
      name: "cart",
      price: 10,
      quantity: 2,
      multiplier: 2,
    },
    {
      name: "truck",
      price: 10,
      quantity: 0,
      multiplier: 10,
    }
  ]

// NOTE create variables for each automatic upgrade item, test the function by creating a button to call collectAutoUpgrades and see if it will play well with the ore
function collectAutoUpgrades() {
  let modOne = automaticUpgrades[0].quantity * automaticUpgrades[0].multiplier;
  ore += modOne;
  console.log(ore);
}

function mine() {
  ore++;
  ore += clickMultiplier;
  update();
}



// this will increase amount mined per click based on click-multiplier//
function updateMultiplier() {
  clickElem.textContent = "+" + clickMultiplier.toString();
}


//this function dynamically draws the player's resources in Resources column//
function update() {
  oreElem.textContent = ore.toString();
  pickElem.textContent = clickUpgrades.pickaxe.quantity.toString();
  jackElem.textContent = clickUpgrades.jackhammer.quantity.toString();
  cartElem.textContent = automaticUpgrades[0].quantity.toString();
  truckElem.textContent = automaticUpgrades[1].quantity.toString();
}

function buyPickaxe() {
  if (ore >= clickUpgrades.pickaxe.quantity) {
    clickUpgrades.pickaxe.quantity++;
    ore -= clickUpgrades.pickaxe.price;
    clickMultiplier += clickUpgrades.pickaxe.multiplier;
    updateMultiplier();
    update();
  }
}
function buyJackhammer() {
  if (ore >= clickUpgrades.jackhammer.price) {
    clickUpgrades.jackhammer.quantity++;
    ore -= clickUpgrades.jackhammer.price;
    clickMultiplier += clickUpgrades.jackhammer.multiplier;
    update();
    updateMultiplier();
  }
}
function buyCart() {
  if (ore >= automaticUpgrades[0].price) {
    automaticUpgrades[0].quantity++;
    ore -= automaticUpgrades[0].price;
    automaticMultiplier += automaticUpgrades[0].multiplier;
    update();
    updateMultiplier();
  }
}
function buyTruck() {
  if (ore >= automaticUpgrades[0].price) {
    automaticUpgrades[0].quantity++;
    ore -= automaticUpgrades[0].price;
    automaticMultiplier += automaticUpgrades[0].multiplier;
    update();
    updateMultiplier();
  }
}

collectAutoUpgrades();