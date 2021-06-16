var backgroundImg, sprite1,spriteImg, snowflake1,snowflake2,snowflake3,snowflake4,snowflake6,snowflake7,snowflake8,snowflakeImg

function setup() {
  createCanvas(800,400);
  sprite1=createSprite(250, 200, 50, 50);
  sprite1.scale=0.3
  spriteImg=loadImage("snow boy.png")
  sprite1.addImage(spriteImg)

  snowflake1=createSprite(400, 30, 50, 50);
  snowflake1.scale=0.2
  snowflake2=createSprite(650, 60, 50, 50);
  snowflake2.scale=0.2
  snowflake3=createSprite(600, 300, 50, 50);
  snowflake3.scale=0.2
  snowflake4=createSprite(325, 300, 50, 50);
  snowflake4.scale=0.2
  snowflake5=createSprite(122, 100, 50, 50);
  snowflake5.scale=0.2
  snowflake6=createSprite(605, 150, 50, 50);
  snowflake6.scale=0.2
  snowflake7=createSprite(100, 300, 50, 50);
  snowflake7.scale=0.2
  snowflakeImg=loadImage("snow4.webp")
  snowflake8=createSprite(400, 200, 50, 50);
  snowflake8.scale=0.2
  snowflake1.addImage(snowflakeImg)
  snowflake2.addImage(snowflakeImg)
  snowflake3.addImage(snowflakeImg)
  snowflake4.addImage(snowflakeImg)
  snowflake5.addImage(snowflakeImg)
  snowflake6.addImage(snowflakeImg)
  snowflake7.addImage(snowflakeImg)
  snowflake8.addImage(snowflakeImg)

  backgroundImg=loadImage("snow1.jpg")
}

function draw() {
  background(backgroundImg);  

if (keyDown(RIGHT_ARROW)){
  sprite1.x=sprite1.x+2
}

if (keyDown(LEFT_ARROW)){
  sprite1.x=sprite1.x-2
}

  drawSprites();
}