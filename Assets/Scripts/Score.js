#pragma strict

static var currentScore : int;

static var score = 0;

var sprites = [];

function Start () {
	sprites = Resources.LoadAll("Stars", Sprite);
}

function Update () {
	score = currentScore;
	if(score>0){
		GetComponent(SpriteRenderer).sprite = sprites[score-1];
	}
}