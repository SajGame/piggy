#pragma strict

function OnMouseDown(){
	reload();
}

function reload(){
	Score.currentScore = 0;
	Application.LoadLevel(Application.loadedLevel);
}