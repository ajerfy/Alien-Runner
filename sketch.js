var bg;
var PC;
var storebg1, storebg2, storebg3;
var storePC;
var score = 0;



function preload() {
  storebg1 = loadImage("images/imBg1.jpg");
  storebg2 = loadImage("images/imBg3.jpg");
  storebg3 = loadImage("images/imBg4.png");

  storePC = loadImage("images/PlayerChar.gif")

}




function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400,200);


  pc = createSprite(200,350);

  pc.velocityX = (5);

}

function draw() {
  background(255,255,255);
  
  camera.x = pc.x; 
  


  
  

  if (frameCount % 600== 0) {
    r = Math.round(random(1,3))

    if (r == 1) {
      bg.addImage(storebg1);
    }

    else if (r == 2) {
      bg.addImage(storebg2);
    }

    else {
      bg.addImage(storebg3);
    }
  }



  



  

  pc.addImage(storePC);

  drawSprites();
}