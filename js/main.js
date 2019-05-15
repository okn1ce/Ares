
//Some functions are inspired from CivClicker, all credits to this amazing game!
//Big thanks to LKD07 & Gigoy for their valuable help!

//Notification script



//Init game data

//Currency
  
  
//Ressources
  var wood = {
      total: 0,
      increment: 0.25,
  },
  fiber = {
      total: 0,
      increment: 0.50,
  },


//Currency
    money = {
      total: 0,
    },
  
//Items
    woodenKey = {
      id: 'woodenKeyCount',
      total: 0,
       price: 3,
   },
   woodenStaff = {
       id: 'woodenStaffCount',
       total: 0,
       price: 10,
       learned: false,
       learnPrice: 40,
       tab: 'two-tab',
   },

//Upgrades available
   upgrades = {
       total: 1,
   },

//Hires available
   hires = {
       total: 2,
   },
//Jobs
    lumberjack = {
        id: "lumberjackCount",
        total: 0,
        hirePrice: 50,
        hired: false,
        increment: 0,
    },
    fiberCollector = {
      id: "fiberCollectorCount",
      total: 0,
      hirePrice: 50,
      hired: false,
      increment: 0,
    }

  
 
  //Unlockables
  document.getElementById('two-tab').style.display = 'none';  
  


 
 
   //Round numbers to N decimals
 function roundN(num,n){
    return parseFloat(Math.round(num * Math.pow(10, n)) /Math.pow(10,n)).toFixed(n);
  }

 
  function updateResourceTotals() {
  //Update page with resource numbers

  //wood
  document.getElementById('wood').innerHTML = roundN(wood.total, 2);
  document.getElementById('woodSpeed').innerHTML = lumberjack.increment; 
  updateSave(wood);

  //fibers
  document.getElementById('fibers').innerHTML = roundN(fiber.total, 2);
  document.getElementById('fibersSpeed').innerHTML = fiberCollector.increment; 
  updateSave(fiber);

  //money
  document.getElementById('money').innerHTML = roundN(money.total, 2);
  updateSave(money);
  
  //upgrades
  document.getElementById('upgradesNb').innerHTML = upgrades.total;
  updateSave(upgrades)

  //hires
  document.getElementById('hiresNb').innerHTML = hires.total;
  updateSave(hires)


   }

function updateItemTotals() {
	//Update page with items numbers
  document.getElementById('woodenKey').innerHTML = woodenKey.total;
  updateSave(woodenKey)

  document.getElementById('woodenStaff').innerHTML = woodenStaff.total;
  updateSave(woodenStaff)

  document.getElementById('money').innerHTML = roundN(money.total, 2);
  updateSave(money)


   }


// Ressources clicker
  function add(material) {
        material.total = material.total + material.increment;
        updateResourceTotals();
  }

// Item crafter for single materiel items only
  function craftOne(material, itemName, count) {
            if (material.total >= count) {
            material.total -= count;
            itemName.total += 1;
            updateItemTotals();
            updateResourceTotals();
        }   
  }

  // Item crafter for double materiel items only
  function craftTwo(material1, count1, material2, count2, itemName) {
            if (material1.total >= count1 && material2.total >= count2) {
            material1.total -= count1;
            material2.total -= count2;
            itemName.total += 1;
            updateItemTotals();
            updateResourceTotals();
        }   
  }
  
 //Item seller
  function sellAll(item) {
    if (item.total >= 1) {
      money.total += (item.total * item.price);
      item.total = 0;
      updateItemTotals();
    }
  }
        
  
  //Upgrades : Learn a craft
  function learn(item) {
      
        if(money.total >= item.learnPrice) {
        item.learned = true;
        document.getElementById(item.tab).style.display = 'inline';
        upgrades.total -= 1;
        money.total -= item.learnPrice;
        document.getElementById(item.id).style.display = 'none';
        updateResourceTotals();
       }
      }
  
      //Hire
  function hire(job) {
       if(money.total >= job.hirePrice) {
        job.hired = true; 
        job.increment += 0.25;
        hires.total -= 1;
        money.total -= job.hirePrice;
        document.getElementById(job.id).style.display = 'none';
        updateResourceTotals();
        updateSave(job)

       }
    }





    //Auto-collect
    function autoIncrement(resource, job) {
      resource.total += job.increment;
      updateResourceTotals();
    }
    
    //Saving to local storage

    function updateSave(fieldObj){
      //this is being done since the game objects aren't saved in one larger object called game data currently
      var varToString = varObj => Object.keys(varObj)[0]
      window.localStorage.setItem(varToString(fieldObj),fieldObj)
    }

    setInterval(function(){ 
      
      autoIncrement(wood, lumberjack);
      autoIncrement(fiber, fiberCollector);
    
    }, 1000);
