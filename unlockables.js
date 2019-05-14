//Inital navigation bar setup
document.getElementById("upgrades").style.display = "none";
document.getElementById("vault").style.display = "inli,e";
document.getElementById("vaultSelector").innerHTML = "> Vault <";

//Hidden upgrades
	//document.getElementById("lumberjack").style.display = "none";
	//document.getElementById("fiberFarm").style.display = "none";




//Make an upgrade visible after a certain ressource amount
if (gameData.money >= 100) {
	document.getElementById("lumberjack").style.display = "inline";
}

if (gameData.money >= 150) {
	document.getElementById("fiberFarm").style.display = "inline";
}