#pragma strict
static var levelData = '';
var totalLevels  = 12;

function Awake () {
	// resetLevelData();
	// Load level data
	if(PlayerPrefs.HasKey('levelData')){
		levelData = PlayerPrefs.GetString('levelData');
	}else{ // if no level data exists, create it
		resetLevelData();
	}
	PlayerPrefs.SetString('levelData', levelData);
}

function resetLevelData(){
	for(var i=0; i<totalLevels; i++){
		if(levelData != ''){
			levelData += ',0:0'; // here is 2 values. first one indecate lock status and second one for stars count. Lock is true if 0 and it is unlocked if it is 1.
		}else{
			levelData += '1:0'; // First level is unlocked initially it wont have an star count. 
		}
	}
	PlayerPrefs.SetString('levelData', levelData);
}