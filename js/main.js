//Some functions are inspired from CivClicker, all credits to this amazing game!
//Big thanks to LKD07 & Gigoy for their valuable help!

//Init game data

//Progres bar
var currentLength;


//Ressources (Fiber is nails)
var lstore = window.localStorage;

var wood = lstore.getItem("wood") ? JSON.parse(lstore.getItem("wood")) : {
    total: 0,
    increment: 0.50 ,
  },
  fiber = lstore.getItem("fiber") ? JSON.parse(lstore.getItem("fiber")) : {
    total: 0,
    increment: 1,
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
   woodenBow = lstore.getItem("woodenBow") ? JSON.parse(lstore.getItem("woodenBow")) : {
     id: 'woodenBowCount',
     total: 0,
     price: 22,
     learned: false,
     learnPrice: 400,
     tab: 'four-tab',
   },
   woodenShield = lstore.getItem("woodenShield") ? JSON.parse(lstore.getItem("woodenShield")) : {
    id: 'woodenShieldCount',
    total: 0,
    price: 27,
    learned: false,
    learnPrice: 600,
    tab: 'five-tab',
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
  },
  mage = lstore.getItem("mage") ? JSON.parse(lstore.getItem("mage")) : {
    id: "mageCount",
    upgradeId: "isMageUpgraded",
    total: 0,
    hirePrice: 100,
    hired: false,
    increment: 0,
  },
  salesmen = lstore.getItem("salesmen") ? JSON.parse(lstore.getItem("salesmen")) : {
    id: "salesCount",
    upgradeId: "isSalesUpgraded",
    total: 0,
    hirePrice: 80,
    hired: false,
    increment: 0.20,
  },
  blacksmith = lstore.getItem("blacksmith") ? JSON.parse(lstore.getItem("blacksmith")) : {
    id: "blacksmithCount",
    upgradeId: "isBlacksmithUpgraded",
    total: 0,
    hirePrice: 80,
    hired: false,
    increment: 0.20,
  }




//Unlockables, each tab = an item
document.getElementById('two-tab').style.display = woodenStaff.learned ? 'inline' : 'none';
document.getElementById('three-tab').style.display = woodenStaff.learned ? 'inline' : 'none';
document.getElementById('four-tab').style.display = woodenStaff.learned ? 'inline' : 'none';
document.getElementById('five-tab').style.display = woodenStaff.learned ? 'inline' : 'none';



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
  document.getElementById('researchSpeed').innerHTML = roundN(mage.increment, 2);
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
  document.getElementById('woodenSword').innerHTML = woodenSword.total;
  updateSave(woodenSword, "woodenSword");

  //wooden Bow
  document.getElementById('woodenBow').innerHTML = woodenBow.total;
  updateSave(woodenBow, "woodenBow");

  //wooden Shield
  document.getElementById('woodenShield').innerHTML = woodenShield.total;
  updateSave(woodenShield, "woodenShield");


}

function updateJobsTotals() {
  //Update page with job numbers and prices
  //Lumberjack
  document.getElementById('lumberjackPrice').innerHTML = roundN(lumberjack.hirePrice, 0);
  
  //Nail Collector
  document.getElementById('fiberPrice').innerHTML = roundN(fiberCollector.hirePrice, 0);
  
  //Mage
  document.getElementById('magePrice').innerHTML = roundN(mage.hirePrice, 0);

  //Salesmen
  document.getElementById('salesPrice').innerHTML = roundN(salesmen.hirePrice, 0);
  
  //Blacksmith
  document.getElementById('blacksmithPrice').innerHTML = roundN(blacksmith.hirePrice, 0);
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
    currentLength = 0;
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

//Item auto-sell function
function sellAuto(item, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  if (item.total >= 1) {
    currentLength += salesmen.increment;
    document.getElementById(progressBar).value = currentLength;
    if (currentLength >= 0.90) {
      currentLength = 0;
      item.total -= 1;
      money.total += item.price;
      document.getElementById(progressBar).value = currentLength;
      updateSave(salesmen, "Salesmen")
    }

    updateItemTotals();
    updateResourceTotals();
  }
}

//Item auto-craft for 1 material items function
function craftAuto(material, itemName, count, progressBar) {
  currentLength = document.getElementById(progressBar).value;
  if (material.total >= count) {
    currentLength += blacksmith.increment;
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

//Item auto-craft for 2 material items function
function craftTwoAuto(material1, count1, material2, count2, itemName, progressBar) {
currentLength = document.getElementById(progressBar).value;
  if (material1.total >= count1 && material2.total >= count2) {
    currentLength += blacksmith.increment;
    document.getElementById(progressBar).value = currentLength;
    if (currentLength >= 0.90) {
    material1.total -= count1;
    currentLength = 0;
    material2.total -= count2;
    itemName.total += 1;
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
    if ("woodenSwordCount" === item.id) {
      updateSave(item, "woodenSword");
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
    job.hirePrice = (job.hirePrice * 1.10)
    updateResourceTotals();
    updateJobsTotals()
    checkUpgrade(job);
    if (job.id === "lumberjackCount") {
      updateSave(job, "lumberjack");
    } 
    if (job.id === "mageCount") {
      updateSave(job, "mage");
    }
    if (job.id === "fiberCollectorCount") {
      updateSave(job, "fiberCollector");
    }
    
      
    }
  }

//Salesmen function
function Buysalesmen() {
  if (money.total >= salesmen.hirePrice) {
    salesmen.hired = true;
    salesmen.total += 1;
    salesmen.increment = (0.20 * salesmen.total);
    money.total -= salesmen.hirePrice;
    salesmen.hirePrice = (salesmen.hirePrice * 1.30);
    updateSave(salesmen, "Salesmen");
  }
  updateJobsTotals();
  updateItemTotals();
  updateResourceTotals();
}

//Blacksmith function
function Buyblacksmith() {
  if (money.total >= blacksmith.hirePrice) {
    blacksmith.hired = true;
    blacksmith.total += 1;
    blacksmith.increment = (0.20 * blacksmith.total);
    money.total -= blacksmith.hirePrice;
    blacksmith.hirePrice = (blacksmith.hirePrice * 1.30);
    updateSave(blacksmith, "Blacksmith");
  }
  updateJobsTotals();
  updateItemTotals();
  updateResourceTotals();
}



//Auto-collect
function autoIncrement(material, job, progressBar) {
  material.total = material.total + job.increment;
  updateResourceTotals();
}

//Auto-sell
function initautosell() {
  if(salesmen.hired === true) {
    if(woodenKey.total >= 1) {
      sellAuto(woodenKey, 'sellWoodenKey');
    }
    if(woodenStaff.total >= 1) {
      sellAuto(woodenStaff, 'sellWoodenStaff');
    }
    if(woodenSword.total >= 1) {
      sellAuto(woodenSword, 'sellWoodenSword');
    }
    if(woodenBow.total >= 1) {
      sellAuto(woodenBow, 'sellWoodenBow');
    }
    if(woodenShield.total >= 1) {
      sellAuto(woodenShield, 'sellWoodenShield');
    }
    document.getElementById('isSalesUpgraded').innerHTML = "Upgrade";
    salesmen.hired = true;
    updateSave(salesmen, "salesmen");
  }
}

//Auto-craft
function initautocraft() {
  if(blacksmith.hired === true) {
    
    if(woodenShield.learned === true) {
      craftTwoAuto(wood, 5, fiber, 8, woodenShield, 'craftWoodenShield');
    }
    if(woodenBow.learned === true) {
      craftAuto(wood, woodenBow, 4, 'craftWoodenBow');
    }
    if(woodenSword.learned === true) {
      craftTwoAuto(wood, 3, fiber, 5, woodenSword, 'craftWoodenSword');
    }
    if(woodenStaff.learned === true) {
      craftAuto(wood, woodenStaff, 2, 'craftWoodenStaff');
    }
    if(wood.total >= 1) {
      craftAuto(wood, woodenKey, 1, 'craftWoodenKey');
    }
    
    document.getElementById('isBlacksmithUpgraded').innerHTML = "Upgrade";
    blacksmith.hired = true;
    updateSave(blacksmith, "blacksmith");
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
checkUpgrade(mage);

//Init item learned status
checkLearnedItem(woodenStaff);
checkLearnedItem(woodenSword);
checkLearnedItem(woodenBow);
checkLearnedItem(woodenShield);

setInterval(function () {
  autoIncrement(wood, lumberjack, 'progressWood');
  autoIncrement(fiber, fiberCollector, 'progressFiber');
  autoIncrement(research, mage, 'progressResearch');
  initautosell();
  initautocraft()
  

}, 1000);

setInterval(function () {
  updateItemTotals();
 updateResourceTotals();
 updateJobsTotals();
}, 10);