#pragma strict

var stageId : int;

function Start () {
	var levelStatus = getLevelStatus(LevelData.levelData, stageId);
	if(levelStatus == '1'){
		Destroy (gameObject);
	}
}

function Update () {

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