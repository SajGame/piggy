#pragma strict

private var spriteRenderer:SpriteRenderer;
private var start:Color;
private var end:Color;
private var t:float = 0.0;
function Start () {
	spriteRenderer = GetComponent('SpriteRenderer');
	start = spriteRenderer.color;
	end = new Color(start.r, start.g, start.b, 0.0);
}

function Update () {
	t += Time.deltaTime;

	renderer.material.color = Color.Lerp(start, end, t/2);

	if(renderer.material.color.a <= 0.0){
		Destroy(gameObject);
	}
}