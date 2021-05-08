// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for two shapes
var shapeX_1 = 30;
var shapeY_1 = 50;
var shapeX_2 = 300;
var shapeY_2 = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}


function draw()
{
    background(0,0,255);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

   
    //character
    fill(255,255,255);
    circle(characterX,characterY,25);

      // handle the keys
      if(keyIsDown(w))
      {
          characterY -= 10;   
      }
      if(keyIsDown(s))
      {
          characterY += 10;   
      }
      if(keyIsDown(a))
      {
          characterX -= 10;   
      }
      if(keyIsDown(d))
      {
          characterX += 10;   
      }

    //create the enemies
    fill(212,25,25);
    circle(shapeX_1, shapeY_1, 100);
    fill(255,128,0);
    circle(shapeX_2,shapeY_2, 50);

    // get a random speed when the it first starts
      shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 
    // move the shaps
     shapeX_1 += shapeXSpeed;
     shapeY_1 += shapeYSpeed;

     shapeX_2 += shapeXSpeed;
     shapeY_2 += shapeYSpeed;

    // check to see if the shape has gone out of bounds
    if(shapeX_1 > width)
    {
        shapeX_1 = 0;
    }

    if(shapeY_1 > height)
    {
        shapeY_1 = 0;
    }

    if(shapeX_2 > width)
    {
        shapeX_2 = 0;
    }

    if(shapeY_2 > height)
    {
        shapeY_2 = 0;
    }
   

     // check to see if the character has left the exit
     if(characterX > width && characterY > width-50)
     {
         fill(0);
         stroke(5);
         textSize(26);
         text("You Win!", width/2-50, height/2-50);
     }

     // create the shape based on the mouse click
    fill(255,255,51);
    circle(mouseShapeX, mouseShapeY, 25);



}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


// create the shape based on the mouse click






