let w ;
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	w = new World(50,50,width-82,height-109,50)
}

function draw() {
	frameRate(120)
	background(255)
	w.draw()
	w.update()
}
function keyPressed(key){
	w.snake.control(key)

}