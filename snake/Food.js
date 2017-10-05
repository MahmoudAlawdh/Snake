class Food{
    constructor(Vector,rows,columns,grid){
        this.grid = grid
        this.pos = Vector;
        this.rows = rows
        this.columns = columns
        this.grid[this.pos.x][this.pos.y].food = true
        
        this.update()
    }
    create(){
        do{
            this.pos.x = floor(random(0, this.rows)) 
            this.pos.y = floor(random(0,this.columns))
        }while(this.grid[this.pos.x][this.pos.y].snake == true)
        this.grid[this.pos.x][this.pos.y].food = true 
        this.update() 
    }
    update(){
        for(let i = 0 ; i < this.grid.length;i++){
            for(let j = 0 ; j < this.grid[i].length;j++){
                this.grid[i][j].update(this.pos,this.grid)
            }
        }
    }
}