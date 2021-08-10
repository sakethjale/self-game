var walking,lwalking
var punch,lpunch
var lnock,nock,recover
var kick,lkick
var jump,ljump
var idel,lidel

var gameState=0;
var database,game,player,form,playerCount;

var bgimg;




function preload(){

bgimg=loadImage("bg.png")

idel=loadAnimation("h/idel1.png","h/idel2.png","h/idel3.png","h/idel4.png")
lidel=loadAnimation("h/lidel1.png","h/lidel2.png","h/lidel3.png","h/lidel4.png")

walking=loadAnimation("h/walk1.png","h/walk2.png","h/walk3.png","h/walk4.png","h/walk5.png")
lwalking=loadAnimation("h/lwalk1.png","h/lwalk2.png","h/lwalk3.png","h/lwalk4.png","h/lwalk5.png")

punch=loadAnimation("h/punch1.png","h/punch2.png","h/punch3.png")
lpunch=loadAnimation("h/lpunch1.png","h/lpunch2.png","h/lpunch3.png")

kick=loadAnimation("h/kick1.png","h/kick2.png","h/kick3.png")
lkick=loadAnimation("h/lkick1.png","h/lkick2.png","h/lkick3.png")

nock=loadAnimation("h/k1.png","h/k2.png","h/k3.png","h/k4.png","h/k5.png")
lnock=loadAnimation("h/lk1.png","h/lk2.png","h/lk3.png","h/lk4.png","h/lk5.png")

recover=loadAnimation("h/kr1.png","h/kr2.png","h/kr3.png","h/kr4.png","h/kr5.png","h/kr6.png","h/kr7.png")
lrecover=loadAnimation("h/lkr1.png","h/lkr2.png","h/lkr3.png","h/lkr4.png","h/lkr5.png","h/lkr6.png","h/lkr7.png")

jump=loadAnimation("h/jump1.png","h/jump2.png","h/jump3.png","h/jump4.png","h/jump5.png","h/jump6.png","h/jump7.png")
ljump=loadAnimation("h/ljump1.png","h/ljump2.png","h/ljump3.png","h/ljump4.png","h/ljump5.png","h/ljump6.png","h/ljump7.png")









 

 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

database=firebase.database()

if(gameState===1)
{
  hero=createSprite(width/5,height-170,20,20)
  hero.addAnimation("hero ideal",ljump)
  hero.scale=1.3

 

  invisibl=createSprite(width/2,height-100,width,10);
}
 game=new Game()
   game.getState();
game.start();




}

function draw() {
  background("blue");
  
 if(playerCount===2)
 {
  gameState=1;
  game.update(1);
  setup();
  
  
 }
 if(gameState===1)
 {
   game.play();
 }
  
  
  drawSprites();
 
}

