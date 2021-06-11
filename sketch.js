var background, backgroundIm, player1, player1Ani, player1st, player1ju, player2, player2Im, airship, airshipIm, bullets, fire, fireAni, prndullum, pendullumIm;
var ball1, ball2, ball3, imposter, imposterIm, life1,life2,life3,life4,life5, lifeIm, track, trackIm, ballIm, fireOb;

function preload() {
  player1Ani = loadAnimation('images/mariostanding.png', 'images/mrunning1.png', 'images/mrunning2.png', 'images/mrunning3.png');
  player1st = loadAnimation('images/mariostanding.png');
  player1ju = loadAnimation('images/mjumping.png');

  airshipIm = loadImage('images/airship.png');
  fireAni = loadAnimation('images/fire1.png', 'images/fire2.png', 'images/fire3.png');

  backgroundIm = loadImage('images/bg.jpg');
  trackIm = loadImage('images/bgnew.jpg');

  pendullumIm = loadAnimation('images/p13.png', 'images/p12.png', 'images/p2.png', 'images/p3.png', 'images/p4.png', 'images/p5.png',
    'images/p1.png', 'images/p6.png', 'images/p7.png', 'images/p8.png', 'images/p9.png', 'images/p11.png',
    'images/p8.png', 'images/p7.png', 'images/p6.png', 'images/p1.png', 'images/p5.png', 'images/p4.png',
    'images/p3.png', 'images/p2.png', 'images/p12.png', 'images/p13.png');

  ballIm = loadImage('images/ball.png');

  imposterIm = loadImage('images/imposter1.png');

  lifeIm = loadImage('images/heart4.png');


}

function setup() {
  createCanvas(windowWidth, windowHeight);




  track = createSprite(displayWidth / 2, displayHeight / 2 - 50);
  track.addImage(trackIm);
  track.scale = 3.8
  track.velocityX = -3

  player1 = createSprite(170, 300);
  player1.addAnimation('mario standing', player1st);
  player1.addAnimation('mario running', player1Ani);
  player1.addAnimation('mario jumping', player1ju);
  player1.scale = 0.7
  player1.velocityX = 0;

  //bullets=createSprite


  for (var i = 150; i < 600; i = i + 70) {
    var bullets = createSprite(900, i, 20, 20);
    bullets.shapeColor = rgb(i, i + 50, i + 5);
    bullets.velocityX = -i / 20
    // bullets(rgb(randomNumber(0,255),100,180));
  }

  airship = createSprite(900, 490);
  airship.addImage(airshipIm);
  airship.scale = 1.6
  airship.velocityY = -3;

  var fire = createSprite(2000,track.y,10,40);
  fire.addAnimation('fi',fireAni);
  //fire.scale=0.5;

  var life1 =createSprite(1450,track.y);
  life1.addImage('life1',lifeIm);

  var life2 =createSprite(2450,track.y);
  life2.addImage('life2',lifeIm);

}

function draw() {
  camera.position.x = player1.x
  camera.position.y = windowHeight / 2

  background(backgroundIm);
  //image(trackIm, 0,100,displayWidth*5, displayHeight-300);

  if (track.x < 0) {
    track.x = displayWidth / 2
  }

  if (keyDown(RIGHT_ARROW)) {
    player1.x += 5
    player1.changeAnimation('mario running', player1Ani);
  }

  if (airship.y < -400) {
    airship.y = 900
  }

  // if(bullets.x< 0){
  //   bullets.x = 900
  // }


  drawSprites();
}





/*function fireOb(){
  if (frameCount % 20 === 100){
    var fire = createSprite(600,165,10,40);
      fire.addAnimation('fi',fireAni);

     //generate random obstacles

     }
    }*/



    // if(player istouching fire)---> if heartscore > 0 heartscore -1 ----> else player.x = 200