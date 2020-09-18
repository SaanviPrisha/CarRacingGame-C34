var ball;
var database,position,pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database()
    console.log(database);
    pos = database.ref("Ball/Position")
    pos.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    pos.set({X: position.X + x, 
    Y: position.Y + y})
}
function readPosition(data) {
    position = data.val()
    ball.x = position.X;
    ball.y = position.Y;
}