var circles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
	circles.push(new Circle(mouseX, mouseY, 25, 255, 100));
}

function draw() {
	background(30);
	for(var i = 0; i < circles.length; i++){
		circles[i].update();
		circles[i].grow();
		circles[i].fade();
		if (circles[i].isFinished()){
			circles.splice(i,i+1);
		}
	}

}