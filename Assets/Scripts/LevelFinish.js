var showPopUp = false;
var totalLevels  = 12;

// Need a texture to display image in GUI
var happyPlayer : Texture2D;
var star : Texture2D;

var replayButtonStyle : GUIStyle;
var nextButtonStyle : GUIStyle;
var menuButtonStyle : GUIStyle;


function OnTriggerEnter2D(other: Collider2D) {
	if(other.gameObject.tag == 'Player'){
		showPopUp = true;
	}
}
// Do the GUI
function OnGUI () {

	// Create a rectangle for the GUI Container
	var guiContainer = Rect (0, 0, Screen.width, Screen.height);

	if(showPopUp){
		guiContainer = GUI.Window (0, guiContainer, PutContent, "");
	}
}

function PutContent (windowID : int) {

	var buttonSize = 40;

	var btnCenterX = (Screen.width-buttonSize)/2;
	var btnCenterY = ((Screen.height-buttonSize)/2)+70;

	// Show collected stars
	var score = Score.score;
	for (var i = 0; i < score; i++) {
		var posX = (btnCenterX)+((buttonSize+10)*(i-1));
		print(posX);
		GUI.Label (Rect (posX, btnCenterY, buttonSize, buttonSize), star);
	};
	// store score and unlock next level.
	saveLevelData(score);

	// Show piggy status image
	GUI.Label (Rect ((btnCenterX+15)-(200/2), btnCenterY-140, 275, 132), happyPlayer);

	// Show buttons
	// Replay
	if(GUI.Button (Rect (btnCenterX-(buttonSize+10), btnCenterY+buttonSize, buttonSize, buttonSize), "", replayButtonStyle)){
		Score.currentScore = 0;
		Application.LoadLevel(Application.loadedLevel);
	}
	// Next Level
	if(GUI.Button (Rect (btnCenterX, btnCenterY+buttonSize, buttonSize, buttonSize), "", nextButtonStyle)){
		Score.currentScore = 0;
		Application.LoadLevel(Application.loadedLevel+1);
	}
	// Main menu
	if(GUI.Button (Rect (btnCenterX+(buttonSize+10), btnCenterY+buttonSize, buttonSize, buttonSize), "", menuButtonStyle)){
		Score.currentScore = 0;
		Application.LoadLevel(0);
	}
}

function saveLevelData(score){
	var levelData = '';
	if(PlayerPrefs.HasKey('levelData')){
		levelData = PlayerPrefs.GetString('levelData');
		levelData = updateLlevelData(levelData, Application.loadedLevel, score, true);
		PlayerPrefs.SetString('levelData', levelData);
	}
}

function updateLlevelData(levelData:String, level:Int32, star:Int32, unlockNextLevel:Boolean){
	var result:String = '';
	var levelDataArray = levelData.Split(","[0]);
	for(var i=0; i< levelDataArray.length; i++){
		if(i== level-1){
			levelDataArray[i] = '1:'+star;
			if(unlockNextLevel){
				if(i+1 <= levelDataArray.length){
					var nextLevel = levelDataArray[i+1].Split(":"[0]);
					levelDataArray[i+1] = "1:"+nextLevel[1];
				}
			}
		}
		if(result != ''){
			result += ','; 
		}
		result += levelDataArray[i]; 


	}
    return result;
}