//Crafting items

    //Torch
    function addTorch() {
    	if (gameData.wood >= 3 && gameData.fiber >= 5) {
    		gameData.torch = gameData.torch + 1;
    		gameData.wood = gameData.wood - 3;
    		gameData.fiber = gameData.fiber - 5;
        gameData.xp = gameData.xp + 2;
    	    document.getElementById("torchCount").innerHTML = gameData.torch;
    	    document.getElementById('woodCount').innerHTML = gameData.wood;
    	    document.getElementById('fiberCount').innerHTML = gameData.fiber;
    	}

    }

    function sellTorch() {
    	if (gameData.torch >= 1) {
    		gameData.money = gameData.money + (15 * gameData.torch);
        gameData.torch = gameData.torch - gameData.torch;
    		document.getElementById("torchCount").innerHTML = gameData.torch;
    		document.getElementById("moneyCount").innerHTML = gameData.money;
    	}
    }

    //Staff
    function addStaff() {
        if (gameData.wood >= 25) {
            gameData.staff = gameData.staff + 1;
            gameData.wood = gameData.wood - 25;
            document.getElementById("staffCount").innerHTML = gameData.staff;
            document.getElementById('woodCount').innerHTML = gameData.wood;
        }

    }

    function sellStaff() {
        if (gameData.staff >= 1) {
        gameData.money = gameData.money + (30 * gameData.staff);
        gameData.staff = gameData.staff - gameData.staff;
            document.getElementById("staffCount").innerHTML = gameData.staff;
            document.getElementById("moneyCount").innerHTML = gameData.money;
        }
    }