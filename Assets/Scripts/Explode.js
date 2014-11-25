#pragma strict

var icePart : IcePart;
var totalParts = 5;
var iceBreakSound : AudioClip;

function Start () {
}

function Update () {
}

function OnMouseDown(){
	// play breaking sound
	if(iceBreakSound){
		AudioSource.PlayClipAtPoint(iceBreakSound, transform.position);
	}

	// Destroy the object
	Destroy (this.gameObject);

	// Show Break parts
	var t = transform;
	var clone:IcePart;

	for(var i=0; i<totalParts; i++){
		t.TransformPoint(0,-100, 0);
		clone = Instantiate(icePart, t.position, Quaternion.identity) as IcePart;
		clone.rigidbody2D.AddForce(Vector3.right * Random.Range(-200, 200));
		clone.rigidbody2D.AddForce(Vector3.up * Random.Range(100,300));
	}
}   