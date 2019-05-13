var gameData = {

  // Currency
  money: 0,
  
  // Ressources  
  wood: 0,
  fiber: 0,

  // Items
  torch: 0,
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