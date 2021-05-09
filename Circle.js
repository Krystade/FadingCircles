function Circle(x, y, r, strokeA, colorA){
	this.x = x;
	this.y = y;
	this.r = r;
	this.strokeA = strokeA;
	this.colorA = colorA;

	this.update = function(){
		stroke(255, this.strokeA);
		strokeWeight(4);
		fill(255, this.colorA);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
	
	this.grow = function(){
		this.r += 1;
	}
	
	this.fade = function(){
		this.strokeA -= 1.5;
		this.colorA -= 1;
	}
	
	this.isFinished = function(){
		print(this.strokeA);
		if(this.strokeA < 0){
			return true;
		}
		else{
			return false;
		}
	}
}