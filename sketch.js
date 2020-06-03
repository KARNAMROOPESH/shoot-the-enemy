var player;
var bulletGroup;
var enemy;
var enemy1;
var bulletGroup1,bulletGroup2;

function setup(){
   createCanvas(600,600)
 player = createSprite(300,550,100,20);
player.shapeColor = "white";
 enemy = createSprite(random(50,550),50,100,20);
 enemy.shapeColor = "red";
 enemy1 = createSprite(random(50,550),50,100,20);
 enemy1.shapeColor = "purple";
 bulletGroup = new Group();
 bulletGroup1 = new Group();
 bulletGroup2 = new Group();
}

function draw(){
    background(0);
    player.x = mouseX;
    createEdgeSprites();
    if (keyDown("space")) {
        spawnBullet();
      }
      enemy.velocityX=4;
       if(enemy.x > 600){
        enemy.velocityX=-4;
        enemy.x = 50;
       }
       else if(enemy.x<0){
        enemy.velocityX=4;
        enemy.x = 550;
       }
       enemy1.velocityX=-4;
       if(enemy1.x > 600){
        enemy1.velocityX=-4;
        enemy1.x = 50;
       }
       else if(enemy1.x<0){
        enemy1.velocityX=4;
        enemy1.x = 550;
       }
       if (bulletGroup1.isTouching(player)||bulletGroup2.isTouching(player)) {
        bulletGroup.destroyEach();
        bulletGroup1.destroyEach();
        player.visible = false;
      }
      if (bulletGroup.isTouching(enemy)) {
        bulletGroup.destroyEach();
        bulletGroup1.destroy();
        enemy.visible = false;
      }
      if (bulletGroup.isTouching(enemy1)) {
        bulletGroup.destroyEach();
        bulletGroup2.destroy();
        enemy1.visible = false;
      }
      spawnBullet1();
      spawnBullet2();
  drawSprites();
}

function spawnBullet() {
    var bullet= createSprite(100, 100, 5, 10);
    bullet.y =  player.y;
    bullet.x = player.x;                                           
    bullet.shapeColor = "white";
    bullet.velocityY = -40;
    bullet.lifetime = 1000;
    bulletGroup.add(bullet);
  } 
  function spawnBullet1() {
    var bullet1= createSprite(100, 100, 5, 10);
    bullet1.y =  enemy.y;
    bullet1.x = enemy.x;                                           
    bullet1.shapeColor = "red";
    bullet1.velocityY = 40;
    bullet1.lifetime = 1000;
    bulletGroup1.add(bullet1);
  } 

  function spawnBullet2() {
    var bullet2= createSprite(100, 100, 5, 10);
    bullet2.y =  enemy1.y;
    bullet2.x = enemy1.x;                                           
    bullet2.shapeColor = "purple";
    bullet2.velocityY = 40;
    bullet2.lifetime = 1000;
    bulletGroup2.add(bullet2);
  } 


  
    
      
       
    