#pragma strict

var playerHitSound : AudioClip;
var starBreakSound : AudioClip;

function Start () {

}

function Update () {

}
function OnTriggerEnter2D(other: Collider2D) {
	if(other.gameObject.tag == 'Player'){
		Destroy(gameObject);
		// Increase Stars
		Score.currentScore += 1;
		AudioSource.PlayClipAtPoint(playerHitSound, transform.position);
	}else{
		Destroy(gameObject);
		AudioSource.PlayClipAtPoint(starBreakSound, transform.position);
	}
}