class World{
    constructor(x,y,width,height,scl){

        this.pos = new createVector(x,y)
        this.width = width -  width%scl
        this.height = height -  height%scl
        this.scl = scl
        let rows = this.width/scl
        let columns = this.height/scl
        let c = color(127)
        this.grid = []
        for(let i = 0 ; i < rows;i++){
            this.grid[i] = []
            for(let j = 0 ; j < columns;j++)
            this.grid[i][j]= new Cell(i*this.scl+50,j*this.scl+50,i,j,this.scl,c)
        }
        
        this.food = new Food(new createVector(5,5),rows,columns,this.grid) 
      
        this.snake = new Snake(new createVector(0,0),floor(width/scl)-1,floor(height/scl)-1,this.grid,this.food,this.ai)
        this.ai = new Ai(this.snake,this.food,rows,columns,this.grid); 
        this.snake.ai = this.ai
    }

    draw(){

        for(let i = 0 ; i<this.grid.length;i++){
            for(let j= 0 ; j < this.grid[i].length;j++){
              this.grid[i][j].draw()
            }
        }

    }
    update(){
        this.snake.update()
        this.ai.play()
    } 
}