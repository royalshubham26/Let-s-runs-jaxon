var jakeImg, pathImg, path, jake, left_boundary,right_boundary, subway, subwayImg;
function preload(){
jakeImg=loadAnimation("runner1.png","runner2.png");
pathImg=loadImage("path.png");

}

function setup(){
  createCanvas( 400,400);
 path=createSprite(200,200);
path.addimage(PathImg);
path.velocityY=5;
path.y=path.height/30;
jake=createSprite(180,340,50,170);
jake.addAnimation("running",runnerImg);
subway=createSprite(200,80,100,100);
subway.addImage(subwatImg);
left_boundary=createSprite(0,300,100,600);
right_boundary=createSprite(390,300,80,600);
left_boundary.visible=false
right_boundary.visible=false
}

function draw() {
  background(0);
  path.velocityY=5;
  jake.x=world.mousex
  if(path.y>400) {
    path.y=height/2
  }
jake.collide(left_boundary);
jake.collide(right_boundary);
edges=createEdgeSprites()
jake.collide(edges[3])
drawSprites();
}
