#pragma strict

var stageId : int;

function Start () {
	print(LevelData.levelData);
}

function Update () {
}

function OnMouseDown(){
	if(stageId > 0){ // Game Play stages
		var levelStatus = getLevelStatus(LevelData.levelData, stageId);
		if(levelStatus == '1'){
			Score.score = 0;
			Application.LoadLevel(stageId);
		}else{
			print ("level locked");
		}
	}else{ // Menu stage
		Score.currentScore = 0;
		Application.LoadLevel(stageId);
	}
	
}

function getLevelStatus(levelData:String, level:Int32){
	var levelDataArray = levelData.Split(","[0]);
	if(level-1 <= levelDataArray.length){
		var singleLevel = levelDataArray[level-1].Split(":"[0]);
		return singleLevel[0];
	}else{
		return -1;
	}
}