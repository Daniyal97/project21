var canvas;
var music;
var block1, block2, block3, block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(700,550,190,20);
    block1.shapeColor = "green";
    block2 = createSprite(490,550,190,20);
    block2.shapeColor = "red";
    block3 = createSprite(280,550,190,20);
    block3.shapeColor = "orange";
    block4 = createSprite(70,550,200,20);
    block4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(random(20,750),200,50,50);
    box.shapeColor = "white";
    box.velocityY = 5;
    box.velocityX = 3;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);
    


    //add condition to check if box touching surface and make it box
    if (block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor  = "green";
        music.play();
    } else if
        (block2.isTouching(box) && box.bounceOff(block2)){
            box.shapeColor  = "red";
        }else if 
          (block4.isTouching(box) && box.bounceOff(block4)){
              box.shapeColor  = "blue";}
        
               
              if (block3.isTouching(box)){
                box.shapeColor  = "orange";
                box.velocityX = 0;
                box.velocityY = 0;
                music.stop();
            }
    drawSprites();
}
