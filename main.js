var gameData = {

  // Currency
  money: 0,
  
  // Ressources  
  wood: 0,
  fiber: 0,

  // Items
  torch: 0,

  //Upgrades
  lumberjack: 0,
  lumberjackCost: 50,
  fiberFarm: 0,
  fiberFarmCost: 50,

  //Upgrades speed
  lumberjackSpeed: 0,
  fiberFarmSpeed: 0,
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
   	document.getElementById('woodCount').innerHTML = gameData.wood;
    }

    //Fibers
    function addFibers() {
   	gameData.fiber = gameData.fiber + 0.5;
   	document.getElementById('fiberCount').innerHTML = gameData.fiber;
    }

 
 //Crafting items

    //Torch
    function addTorch() {
    	if (gameData.wood >= 3 && gameData.fiber >= 5) {
    		gameData.torch = gameData.torch + 1;
    		gameData.wood = gameData.wood - 3;
    		gameData.fiber = gameData.fiber - 5;
    	    document.getElementById("torchCount").innerHTML = gameData.torch;
    	    document.getElementById('woodCount').innerHTML = gameData.wood;
    	    document.getElementById('fiberCount').innerHTML = gameData.fiber;
    	}

    }

    function sellTorch() {
    	if (gameData.torch >= 1) {
    		gameData.torch = gameData.torch - 1;
    		gameData.money = gameData.money + 15;
    		document.getElementById("torchCount").innerHTML = gameData.torch;
    		document.getElementById("moneyCount").innerHTML = gameData.money;
    	}
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
	fiberSecond()
	
}, 1000);