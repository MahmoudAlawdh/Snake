class Snake {
    constructor(Vector,constrainx,constrainy,grid,food) {
        this.positions = [Vector,new createVector(Vector.x+10,Vector.y-1)]
        this.acc = new createVector(1, 0)
        this.color = color(0, 0, 255)
        this.constrainx = constrainx
        this.constrainy = constrainy
        this.grid = grid
        this.grid[this.positions[0].x][this.positions[0].y].snake = true
        this.food = food
        this.ai = null
        
    }
    update() {
        this.updateSnake()
        this.grid[this.positions[0].x][this.positions[0].y].head = false

        this.positions[0].add(this.acc)
        this.edges()
        this.positions[0].x = constrain(this.positions[0].x, 0, this.grid.length-1)
        this.positions[0].y = constrain(this.positions[0].y, 0, this.grid[0].length-1)
        this.hit(this.positions[0].x,this.positions[0].y)
        this.grid[this.positions[0].x][this.positions[0].y].snake = true
        this.grid[this.positions[0].x][this.positions[0].y].head = true

        this.eat()
    }
    updateSnake(){
        for (let i = this.positions.length - 1; i >= 1; i--) {
            this.positions[i].x = this.positions[i - 1].x
            this.positions[i].y = this.positions[i - 1].y
        }
       this.grid[this.positions[this.positions.length-1].x][this.positions[this.positions.length-1].y].snake = false
    }
    edges(){
        if(this.positions[0].x == -1){
            this.positions[0].x = this.grid.length-1
        }
        if(this.positions[0].x == this.grid.length){
            this.positions[0].x = 0
        }
        if(this.positions[0].y == -1){
            this.positions[0].y = this.grid[0].length-1
        }
        if(this.positions[0].y == this.grid[0].length){
            this.positions[0].y = 0
        }
    }
    hit(i,j){
        if(this.grid[i][j].snake == true){
            this.ai.evalute()
            this.restart()
        

        }
    }
    control(key) {
        if (key.key == "d" && this.acc.x != -1) {
            this.move(1,0)
        }
        if (key.key == "w" && this.acc.y != 1) {
            this.move(0,-1)
        }
        if (key.key == "a" && this.acc.x != 1) {
            this.move(-1,0)
        }
        if (key.key == "s" && this.acc.y != -1) {
            this.move(0,1)
        }
        if(key.key ==" "){
            this.add()
        }
    }
    move(x,y){
        this.acc.x = x
        this.acc.y = y
    }
    restart(){

        let score = this.positions.length
        for(let i = 0 ; i < this.positions.length;i++){
            console.log(this.positions.length)
            this.grid[this.positions[i].x][this.positions[i].y].snake = false
        }   

        this.positions = [new createVector(0,0)]

        this.acc = new createVector(1,0)    


        return score
    }
    eat(){
        let counter = 0
        for(let i = 0 ; i < this.grid.length;i++){
            for(let j = 0 ; j < this.grid[i].length;j++){
                if(this.grid[i][j].food == true){
                    counter ++
                }
            }
        }
        if(this.grid[this.positions[0].x][this.positions[0].y].food == true && counter == 1){
            this.grid[this.positions[0].x][this.positions[0].y].food = false
            this.add()
            this.food.create()
        }
    }
    add() {
   

            if (this.acc.x == 1) {
                this.positions.push(new createVector(this.positions[this.positions.length - 1].x - 1, this.positions[this.positions.length - 1].y))

            }
            if (this.acc.x == -1) {
                this.positions.push(new createVector(this.positions[this.positions.length - 1].x + 1, this.positions[this.positions.length - 1].y))

            }
            if (this.acc.y == 1) {
                this.positions.push(new createVector(this.positions[this.positions.length - 1].x, this.positions[this.positions.length - 1].y - 1))

            }
            if (this.acc.y == -1) {
                this.positions.push(new createVector(this.positions[this.positions.length - 1].x, this.positions[this.positions.length - 1].y + 1))

            }
        
    }

}