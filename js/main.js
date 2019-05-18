//Some functions are inspired from CivClicker, all credits to this amazing game!
//Big thanks to LKD07 & Gigoy for their valuable help!

//Init game data

//Progres bar
var currentLength;


//Ressources
var lstore = window.localStorage;

var wood = lstore.getItem("wood") ? JSON.parse(lstore.getItem("wood")) : {
    total: 0,
    increment: 0.33,
  },
  fiber = lstore.getItem("fiber") ? JSON.parse(lstore.getItem("fiber")) : {
    total: 0,
    increment: 0.50,
  },
  research = lstore.getItem("research") ? JSON.parse(lstore.getItem("research")) : {
    total: 0,
    increment: 0.33,

  },

  //Currency
  money = lstore.getItem("money") ? JSON.parse(lstore.getItem("money")) : {
    total: 0,
  },

  //Items
  woodenKey = lstore.getItem("woodenKey") ? JSON.parse(lstore.getItem("woodenKey")) : {
    id: 'woodenKeyCount',
    total: 0,
    price: 5,
  },
  
  woodenStaff = lstore.getItem("woodenStaff") ? JSON.parse(lstore.getItem("woodenStaff")) : {
    id: 'woodenStaffCount',
    total: 0,
    price: 12,
    learned: false,
    learnPrice: 50,
    tab: 'two-tab',
  },

   woodenSword = lstore.getItem("woodenSword") ? JSON.parse(lstore.getItem("woodenSword")) : {
     id: 'woodenSwordCount',
     total: 0,
     price: 17,
     learned: false,
     learnPrice: 200,
     tab: 'three-tab',
   },

  //Jobs
  lumberjack = lstore.getItem("lumberjack") ? JSON.parse(lstore.getItem("lumberjack")) : {
    id: "lumberjackCount",
    upgradeId: "isLumberUpgraded",
    total: 0,
    hirePrice: 10,
    hired: false,
    increment: 0,
  },
  fiberCollector = lstore.getItem("fiberCollector") ? JSON.parse(lstore.getItem("fiberCollector")) : {
    id: "fiberCollectorCount",
    upgradeId: "isFiberUpgraded",
    total: 0,
    hirePrice: 15,
    hired: false,
    increment: 0,
  }



//Unlockables
document.getElementById('two-tab').style.display = woodenStaff.learned ? 'inline' : 'none';



//Round numbers to N decimals
function roundN(num, n) {
  return parseFloat(Math.round(num * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
}




function updateResourceTotals() {
  //Update page with resource numbers

  //wood
  document.getElementById('wood').innerHTML = roundN(wood.total, 0);
  document.getElementById('woodSpeed').innerHTML = roundN(lumberjack.increment, 2);
  updateSave(wood, "wood");

  //fibers
  document.getElementById('fibers').innerHTML = fiber.total;
  document.getElementById('fibersSpeed').innerHTML = roundN(fiberCollector.increment, 2);
  updateSave(fiber, "fiber");

  //money
  document.getElementById('money').innerHTML = roundN(money.total, 2);
  updateSave(money, "money");


  //Research
  document.getElementById('research').innerHTML = roundN(research.total, 0);
  updateSave(research, "research");


}

function updateItemTotals() {
  //Update page with items numbers
  //wooden key
  document.getElementById('woodenKey').innerHTML = woodenKey.total;
  updateSave(woodenKey, "woodenKey");

  //wooden Staff
  document.getElementById('woodenStaff').innerHTML = woodenStaff.total;
  updateSave(woodenStaff, "woodenStaff");

  //Money
  document.getElementById('money').innerHTML = roundN(money.total, 2);
  updateSave(money, "money");

  //wooden Sword
  //document.getElementById('woodenSword').innerHTML = woodenSword.total;
  //updateSave(woodenSword, "woodenSword");


}

function updateJobsTotals() {
  //Update page with job numbers and prices
  //Lumberjack
  document.getElementById('lumberjackPrice').innerHTML = roundN(lumberjack.hirePrice, 0);
  
  //Fiber Collector
  document.getElementById('fiberPrice').innerHTML = roundN(fiberCollector.hirePrice, 0);
  
}


// Ressources clicker
function add(material, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  currentLength += material.increment;
  document.getElementById(progressBar).value = currentLength;



  if (currentLength >= 0.90) {
    currentLength = 0;
    material.total = material.total + 1;
    document.getElementById(progressBar).value = currentLength;

  }

  updateResourceTotals();
}

// Item crafter for single materiel items only
function craftOne(material, itemName, count, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  if (material.total >= count) {
    currentLength += 0.25;
    document.getElementById(progressBar).value = currentLength;
    if (currentLength >= 0.90) {
      currentLength = 0;
      material.total -= count;
      itemName.total += 1;
      document.getElementById(progressBar).value = currentLength;
    }

    updateItemTotals();
    updateResourceTotals();
  }
}

// Item crafter for double materiel items only
function craftTwo(material1, count1, material2, count2, itemName, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  if (material1.total >= count1 && material2.total >= count2) {
    currentLength += 0.25;
    document.getElementById(progressBar).value = currentLength;
    if (currentLength >= 0.90) {
    material1.total -= count1;
    material2.total -= count2;
    itemName.total += 1;
    document.getElementById(progressBar).value = currentLength;
    }
    updateItemTotals();
    updateResourceTotals();
  }
}

//Item seller
function sell(item, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  if (item.total >= 1) {
    currentLength += 0.2;
    document.getElementById(progressBar).value = currentLength;
    if (currentLength >= 0.90) {
      currentLength = 0;
      item.total -= 1;
      money.total += item.price;
      document.getElementById(progressBar).value = currentLength;
    }

    updateItemTotals();
    updateResourceTotals();
  }
}


//Research : Learn a craft
function learn(item) {
    if (research.total >= item.learnPrice) {
    item.learned = true;
    research.total -= item.learnPrice;
    if (item.learned === true) {
      document.getElementById(item.tab).style.display = 'inline';
      document.getElementById(item.id).style.display = 'none';
    }
    if ("woodenStaffCount" === item.id) {
      updateSave(item, "woodenStaff");
    }
    updateResourceTotals();
  }
}

//Hire
function hire(job, baseIncrement) {
  if (money.total >= job.hirePrice) {
    job.hired = true;
    job.total += 1;
    job.increment = (baseIncrement * job.total);
    money.total -= job.hirePrice;
    job.hirePrice = (job.hirePrice * 1.45)
    updateResourceTotals();
    updateJobsTotals()
    checkUpgrade(job);
    if (job.id === "lumberjackCount") {
      updateSave(job, "lumberjack")
    } 
    if (job.id === "fiberCollectorCount") {
      updateSave(job, "fiberCollector")
    }
      
    }
  }






//Auto-collect
function autoIncrement(material, job, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  currentLength += job.increment;
  document.getElementById(progressBar).value = currentLength;



  if (currentLength >= 0.90) {
    currentLength = 0;
    material.total = material.total + 1;
    document.getElementById(progressBar).value = currentLength;
    updateResourceTotals();

  }

}


//Saving to local storage

function updateSave(fieldObj, objNameStr) {
  window.localStorage.setItem(objNameStr, JSON.stringify(fieldObj))
}

function clearSave() {
  window.localStorage.clear();
  document.location.reload(true);
}

//Init game data for saves
updateItemTotals();
updateResourceTotals();
updateJobsTotals();

//Check if jobs are can have "upgrade" status
function checkUpgrade(job) {
  if (job.hired === true) {
    document.getElementById(job.upgradeId).innerHTML = "Upgrade";
  }
}

//Check if an item is learned.
function checkLearnedItem(item) {
  if (item.learned === true) {
    document.getElementById(item.tab).style.display = 'inline';
    document.getElementById(item.id).style.display = 'none';
  }
}

//Init job upgrade status
checkUpgrade(lumberjack);
checkUpgrade(fiberCollector);

//Init item learned status
checkLearnedItem(woodenStaff);

setInterval(function () {

  autoIncrement(wood, lumberjack, 'progressWood');
  autoIncrement(fiber, fiberCollector, 'progressFiber');

}, 1000);