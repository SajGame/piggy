#pragma strict

var playerShock : AudioClip;
var deadPlayer : Texture2D;
var replayButtonStyle : GUIStyle;
var menuButtonStyle : GUIStyle;
var showPopUp = false;
var doneOnce = false;

function OnTriggerEnter2D(other: Collider2D) {
	if(other.gameObject.tag == 'Player' && doneOnce == false){
		doneOnce = true;
		// Plyer lost flying effect
		other.rigidbody2D.gravityScale = 0.5;
		// Shock animation
		var animator : Animator = other.GetComponent(Animator);
		animator.SetInteger("PlayerState",1);
		// Shock Sound
		AudioSource.PlayClipAtPoint(playerShock, transform.position);
		// Show replay
		showPopUp = true;
	}
}

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

	// Show piggy status image
	GUI.Label (Rect ((btnCenterX+15)-(200/2), btnCenterY-140, 275, 132), deadPlayer);

	// Show buttons
	// Replay
	if(GUI.Button (Rect (btnCenterX-25, btnCenterY+buttonSize, buttonSize, buttonSize), "", replayButtonStyle)){
		Score.currentScore = 0;
		Application.LoadLevel(Application.loadedLevel);
	}
	// Main menu
	if(GUI.Button (Rect (btnCenterX+25, btnCenterY+buttonSize, buttonSize, buttonSize), "", menuButtonStyle)){
		Score.currentScore = 0;
		Application.LoadLevel(0);
	}
}