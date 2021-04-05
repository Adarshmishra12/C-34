const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


   ground = new Ground(600,580,1200,20);

   box1 = new Box(900,100,70,70);
   box2 = new Box(900,100,70,70);
   box3 = new Box(900,100,70,70);
   box4 = new Box(900,100,70,70);
   box5 = new Box(900,100,70,70);
   box6 = new Box(900,100,70,70);
   box7 = new Box(800,100,70,70);
   box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);

    ball = new Ball(200,200,80,80);

    rope = new Rope(ball.body,{x:500,y:50});
   
    
}

function draw(){
    background(0);
    
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display(); 
    box6.display(); 
    box7.display();
     box8.display();
      box9.display();
      box10.display();
      box11.display();
      box12.display();

      ball.display();

      rope.display();
    
    

 
}

function mouseDragged(){
   
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     bird.trajectory=[];
     Matter.Body.setPosition(bird.body,{x:200,y:50});
      gameState="onSling";
       slingshot.attach(bird.body);
    }
}

async function getTime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON);
    var datetime=  responseJSON.datetime
    console.log(datetime)
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=06&&hour<=19){
        bg="sprites/bg.png";
    }

    else{
        bg="sprites/bg2.png";
    }
 
    backgroundImg=loadImage(bg);

}