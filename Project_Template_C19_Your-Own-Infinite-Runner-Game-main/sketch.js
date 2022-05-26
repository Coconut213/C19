var asteroid,astImg
var ship,shipImg
var bk,bkImg
var star, starImg
var score = 0
var astGroup


function preload(){

shipImg = loadImage('Spaceship.png')
astImg = loadImage('obstacle1.jpeg')
bkImg = loadImage('Space_game_bk.png')
starImg = loadImage('star_img.png')
}

function setup() {
 createCanvas(600,600)
 
 bk = createSprite(300,300,600,600)
 bk.addAnimation("bk",bkImg)
 bk.velocityY = 1

astGroup = createGroup()


 ship = createSprite(300,300,25,25)
 ship.addAnimation("ship",shipImg)


ship.scale = 0.1


}

function draw() {
    
    

    
 if(keyDown(RIGHT_ARROW)){
     ship.x = ship.x + 6
 }
 if(keyDown(LEFT_ARROW)){
     ship.x = ship.x - 6

 }
 if(bk.y >340){
     bk.y = 300
     
     
 }
 
 if(ship.isTouching(astGroup)){
 text("Game Over",275,300)
 bk.velocityY = 0
 astGroup.setVelocityYEach(0)
 }




if(frameCount % 60 ===0){
    asteroid = createSprite(100,0,25,25) 
    asteroid.addAnimation("asteroid", astImg)
    asteroid.x = Math.round(random(25,575))
    asteroid.scale = 0.20
    asteroid.velocityY = 3
    astGroup.add(asteroid)
}

if(frameCount % 240 ===0){
    star = createSprite(100,0,25,25) 
    star.addAnimation("star", starImg)
    star.x = Math.round(random(25,575))
    star.scale = 0.05
    star.velocityY = 2
    
}


 drawSprites()
}

