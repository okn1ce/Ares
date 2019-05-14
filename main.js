var gameData = {
 
  //XP
  xp: 0,
  level: 0,

  // Currency
  money: 0,
  
  // Ressources  
  wood: 0,
  fiber: 0,

  // Items
  torch: 0,
  staff:  0,

  //Upgrades
  lumberjack: 0,
  lumberjackCost: 50,
  fiberFarm: 0,
  fiberFarmCost: 50,

  //Upgrades speed
  lumberjackSpeed: 0,
  fiberFarmSpeed: 0,


}

//Dealing with rogue decimals
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
  return output;
}
//Level system

function updatecounters(){
    if (gameData.xp > 10) {
      gameData.level = gameData.level + 1;
      gameData.xp = 0;
      document.getElementById("levelCount").innerHTML = gameData.level;
    }
}







//Navigation bar for Upgrades / Vault
function showUpgrades() {
	document.getElementById("upgrades").style.display = "inline";
	document.getElementById("vault").style.display = "none";
	document.getElementById("upgradeSelector").innerHTML = "> Upgrades <";
	document.getElementById("vaultSelector").innerHTML = "Vault";
}

function showVault() {
	document.getElementById("upgrades").style.display = "none";
	document.getElementById("vault").style.display = "inline";
	document.getElementById("upgradeSelector").innerHTML = "Upgrades";
	document.getElementById("vaultSelector").innerHTML = "> Vault <";
}

// Mining ressources
  
   //Wood
   function addWood() {
   	gameData.wood = gameData.wood + 0.25;
    gameData.xp = gameData.xp + 0.2;
    document.getElementById('woodCount').innerHTML = gameData.wood;
    }

    //Fibers
    function addFibers() {
   	gameData.fiber = gameData.fiber + 0.5;
    gameData.xp = gameData.xp + 0.2;
   	document.getElementById('fiberCount').innerHTML = gameData.fiber;
    }

 
 


 //Upgrades

    //Lumberjack
    function addLumberjack() {
    	if (gameData.money >= gameData.lumberjackCost) {
    		gameData.money = gameData.money - gameData.lumberjackCost;
    		gameData.lumberjack = gameData.lumberjack + 1;
    		gameData.lumberjackCost = (gameData.lumberjackCost * 2);
    		gameData.lumberjackSpeed = gameData.lumberjackSpeed + 0.5;
    		document.getElementById("moneyCount").innerHTML = gameData.money;
    		document.getElementById("lumberjackCount").innerHTML = gameData.lumberjack;
    		document.getElementById("lumberjackSpeed").innerHTML = gameData.lumberjackSpeed;
    		document.getElementById("lumberjackCost").innerHTML = gameData.lumberjackCost;
    		
    	}
    }

    //Fibre Farm
    function addfiberFarm() {
    	if (gameData.money >= gameData.fiberFarmCost) {
    		gameData.money = gameData.money - gameData.fiberFarmCost;
    		gameData.fiberFarm = gameData.fiberFarm + 1;
    		gameData.fiberFarmCost = (gameData.fiberFarmCost * 2);
    		gameData.fiberFarmSpeed = gameData.fiberFarmSpeed + 0.75
    		document.getElementById("moneyCount").innerHTML = gameData.money;
    		document.getElementById("fiberFarmCount").innerHTML = gameData.fiberFarm;
    		document.getElementById("fiberFarmSpeed").innerHTML = gameData.fiberFarmSpeed;
    		document.getElementById("fiberFarmCost").innerHTML = gameData.fiberFarmCost;
    		
    	}
    }





 // Ticks
 function woodSecond() {
 	gameData.wood = gameData.wood + gameData.lumberjackSpeed;
 	document.getElementById('woodCount').innerHTML = gameData.wood;
 }

 function fiberSecond() {
 	gameData.fiber = gameData.fiber + gameData.fiberFarmSpeed;
 	document.getElementById('fiberCount').innerHTML = gameData.fiber;
 }

 window.setInterval(function(){
	
	woodSecond();
	fiberSecond();

	
}, 1000);