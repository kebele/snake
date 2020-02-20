/*
Create by Learn Web Developement
Youtube channel : https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA
*/

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

const muzImg = new Image();
muzImg.src = "img/muz.png";

const tavukImg = new Image();
tavukImg.src = "img/tavuk.png";

const pepperImg = new Image();
pepperImg.src = "img/pepper.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();
let ses = new Audio();
let zil = new Audio();
let ahhg = new Audio();
let walk = new Audio();

dead.src = "audio/shotgun.mp3";
ahhg.src = "audio/ahhg.mp3";
eat.src = "audio/yedi.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";
ses.src = "audio/dew_drops.mp3"
zil.src = "audio/bell.mp3"
walk.src = "audio/walk.mp3"

// create the snake

let snake = [];

snake[0] = {
    /* snake initial point*/
    x : 9 * box,
    y : 9 * box
};

// create the foods

let food1 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let food2 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let food3 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let food4 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let food5 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let food6 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
/* let food7 = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
} */


// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        /* walk.play(); */
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        /* walk.play(); */
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        /* walk.play(); */
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
       /*  walk.play(); */
    }
}

// check collision function
/*yılanın başı ile array'in bir parçası aynı olduğunda true verecek, yani çarpışma */
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "orangered";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        /* snake's border */
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box); 
    }
    
    ctx.drawImage(foodImg, food1.x, food1.y);
    ctx.drawImage(muzImg, food2.x, food2.y);
    ctx.drawImage(pepperImg, food3.x, food3.y);
    ctx.drawImage(pepperImg, food4.x, food4.y);
    ctx.drawImage(pepperImg, food6.x, food6.y);
   /*  ctx.drawImage(pepperImg, food7.x, food7.y); */
    ctx.drawImage(tavukImg, food5.x, food5.y);
    
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food1.x && snakeY == food1.y){
                
        //create new food ramdomly
        food1 = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        };
        // update score
        score++;
        //play sound
        eat.play();         
        
        
    }else if(snakeX == food2.x && snakeY == food2.y){
        
        food2 = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        };
        score+=2;
        eat.play();
        snake.push(box);
    }else if(snakeX == food5.x && snakeY == food5.y){
        
        food5 = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        };
        score+=3;
        eat.play();
        snake.push(box, box);
    }else if(snakeX == food3.x && snakeY == food3.y){
        
        food3 = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        };
        score-=2;
        eat.play();
        snake.splice(-3,3);
        }
        else if(snakeX == food4.x && snakeY == food4.y){
            
            food4 = {
                x : Math.floor(Math.random()*17+1) * box,
                y : Math.floor(Math.random()*15+3) * box
            };
            score-=2;
            eat.play();
            snake.splice(-3,3);
            }
        else if(snakeX == food6.x && snakeY == food6.y){
            
            food6 = {
                x : Math.floor(Math.random()*17+1) * box,
                y : Math.floor(Math.random()*15+3) * box
            };
            score-=2;
            eat.play();
            snake.splice(-3,3);
            }
        /* else if(snakeX == food7.x && snakeY == food7.y){
            
            food7 = {
                x : Math.floor(Math.random()*17+1) * box,
                y : Math.floor(Math.random()*15+3) * box
            };
            score-=2;
            eat.play();
            snake.splice(-3,3);
            } */
// we don't remove the tail
    else{
        // remove the tail
        //when the snake did not eat the food, remove tail and add a new head
        snake.pop();
        /* walk.play(); */
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        dead.play();        
        clearInterval(game);
        //dead.play();
    }
    /* adding new head to snake, it is an array*/
    snake.unshift(newHead);

    /* score font features*/
    ctx.fillStyle = "black";
    ctx.font = "35px Tahoma";
    ctx.fillText(score,2*box,1.6*box);
}

// call draw function every 300 ms

let game = setInterval(draw,500);

