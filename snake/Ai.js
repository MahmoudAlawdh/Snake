class Ai {
    constructor(_snake, _food, _columns, _rows,grid) {
        this.snake = _snake
        this.food = _food
        this.rows = _rows
        this.columns = _columns
        this.score = 0
        this.attemps = 0
        this.grid = grid

    }
    play() {
        this.steer(this.food.pos.x, this.food.pos.y)
    }
    evalute() {
        this.score +=this.snake.positions.length
        this.attemps +=1
        console.log(this.snake.positions.length,this.attemps,this.score/this.attemps)
    }


    steer(x, y) {
        let distances = []
        let nextMove  = {}
        let head = this.snake.positions[0]
        if(head.x > 0 ){
            if(this.grid[head.x-1][head.y].snake == false){
            distances.push(this.grid[head.x-1][head.y].distance) //left distance
            nextMove[this.grid[head.x-1][head.y].distance] = [-1,0]
            }
            
        }
        if(head.x < this.grid.length-1){
            if(this.grid[head.x+1][head.y].snake == false){
            distances.push(this.grid[head.x+1][head.y].distance) // right idstance
            nextMove[this.grid[head.x+1][head.y].distance] = [1,0]
            }
        }
        if(head.y > 0){
            if(this.grid[head.x][head.y-1].snake == false){
            distances.push(this.grid[head.x][head.y-1].distance)
            nextMove[this.grid[head.x][head.y-1].distance] = [0,-1]
            }

        }
        if(head.y < this.grid[0].length-1){
            if(this.grid[head.x][head.y+1].snake == false){
            distances.push(this.grid[head.x][head.y+1].distance)
            nextMove[this.grid[head.x][head.y+1].distance] = [0,1] 
            }
            
        }
        if(distances.length !=0)
          this.snake.move(nextMove[Math.min.apply(null,distances)][0],nextMove[Math.min.apply(null,distances)][1])
        else{
            this.snake.move(0,0)
        }


    }

}