class Cell {
    constructor(x, y, i, j, scale, color) {
        this.color = color
        this.foodColor = [0, 255, 0]
        this.i = i
        this.j = j
        this.x = x
        this.y = y
        this.scale = scale
        this.distance = Infinity
        this.food = false
        this.snake = false
        this.head = false
    }
    draw() {
        if (this.food == false) {
            fill(this.color)
            noStroke()
            rect(this.x, this.y, this.scale, this.scale)
        } else {
            fill(this.foodColor)
            noStroke()
            rect(this.x, this.y, this.scale, this.scale)
        }
        if (this.snake == true) {

            fill(0, 0, 255)
            noStroke()
            rect(this.x, this.y, this.scale, this.scale)
        }
        if (this.head == true) {
            fill(255, 0, 0)
            noStroke()
            rect(this.x, this.y, this.scale, this.scale)
        }

    }
    update(food, grid) {

        let f = new createVector(food.x, food.y)

        this.distance = new createVector(this.i, this.j).dist(f)
        
    }

}