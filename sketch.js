const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine,world;
var b1, b2, b3, b4;
var background;

var B1;
var a,b,c,d;

var player;
var ani ;

var i1,i_1,i2,i_2,i3,i_3,i4,i_4;
let i5,i6,i7,i8,i9,i10,i11,i12,i13,i14;
let j5,j6,j7,j8,j9,j10,j11,j13,j14;
let j51,j16,j17,j18,j19,j20,j21,j22,j23,j24;


function preload(){

  back = loadImage("images/spriete 8.webp");
  back1  = loadImage("images/bg 6.png");
  back2 = loadImage("images/the1.jpg");
  man = loadImage("images/character2.png");

  ani = loadAnimation("ani/ani 5.png","ani/ani 6.png","ani/ani 7.png","ani/ani 8.png");

  i1 = loadImage("img/b5.jpg");
  i2 = loadImage("img/b11.jpg");
  i3 = loadImage("img/b12.jpg");
  i4 = loadImage("img/b2.jpg");
  i5 = loadImage("img/bdown1.jpg");
  i6 = loadImage("img/s3.png");
  i7 = loadImage("img/b35.jpg");
  i8 = loadImage("img/b36.jpg");
  i9 = loadImage("img/b37.jpg");
  i10 = loadImage("img/b41.jpg");
  i11 = loadImage("img/b38.jpg");
  i12 = loadImage("img/b27.jpg");
  i13 = loadImage("img/b28.jpg");
  i14 = loadImage("img/s1.jpg");
  i15 = loadImage("img/b74.jpg");
  i16 = loadImage("img/b51.jpg");
  i17 = loadImage("img/b53.jpg");
  i18 = loadImage("img/s1.jpg");
  i19 = loadImage("img/b57.jpg");
  i20 = loadImage("img/i3.jpg");
  i21 = loadImage("img/i1.jpg");
  i22 = loadImage("img/i5.jpg");
  i23 = loadImage("img/i4.jpg");
  i24 = loadImage("img/v75.jpg");
  i25 = loadImage("img/b76.jpg");
  i26 = loadImage("img/b20.jpg");
  i27 = loadImage("img/b19.jpg");
  i28 = loadImage("img/b77.jpg");
  i29 = loadImage("img/b83.jpg");
  i30 = loadImage("img/t.jpg");
  i31 = loadImage("img/b18.jpg");
  i32 = loadImage("img/b16.jpg");
  i33 = loadImage("img/t1.jpg");
  i34 = loadImage("img/t2.jpg");
  


}


function setup(){
    var canvas  = createCanvas(1365,620);
 
    engine = Engine.create();
    world = engine.world;

    b2 = createSprite(width/2,height/2);
    b2.addImage(back);
    b2.scale = 14.5;

    b3 = new Man(300,2100,35,35,PI/10);

    B1 = createSprite(3845,-1600);
    B1.addImage(back2);
    B1.scale = 2.83;


    player = createSprite(2070,300);
    player.addImage("walking",man);

    j42 = createSprite(4390,740);
    j42.addImage(i23);
    j42.scale = 3.19;

    j30 = createSprite(3140,4260);
    j30.addImage(i11);
    j30.scale = 2;

    j29 = createSprite(4280,3680);
    j29.addImage(i17);
    j29.scale = 2.0;

    j5 = createSprite(-1100,3350);
    j5.addImage(i5);
    j5.scale = 2.15;
    j5.rotation = 3;

    i_1 = createSprite(4450,1780);
    i_1.addImage(i1);
    i_1.scale = 1.55;

    i_2 = createSprite(-1750,3410);
    i_2.addImage(i2);
    i_2.scale = 2.85;

    i_3 = createSprite(4550,-1750);
    i_3.addImage(i3);
    i_3.scale = 1.7;

    i_4 = createSprite(-2800,3200);
    i_4.addImage(i4);
    i_4.scale = 2.4;
    i_4.rotation = 12;

    j6 = createSprite(-120,4220);
    j6.addImage(i6);
    j6.scale = 0.85;

    j7 = createSprite(1090,4250);
    j7.addImage(i7);
    j7.scale = 1.65;

    j8 = createSprite(-70,2800);
    j8.addImage(i8);
    j8.scale = 2.1;

    j9 = createSprite(1450,-1700);
    j9.addImage(i8);
    j9.scale = 2.1;
    j9.rotation = 180;

    j10 = createSprite(-2310,1080);
    j10.addImage(i8);
    j10.scale = 2.15;

    j11 = createSprite(1450,2800);
    j11.addImage(i9);
    j11.scale = 2.1;
    
    j12 = createSprite(-770,1080);
    j12.addImage(i9);
    j12.scale = 2.15;


    j13 = createSprite(-2280,60);
    j13.addImage(i9);
    j13.scale = 2.15;
    j13.rotation = 180;

    j14 = createSprite(-90,-1700);
    j14.addImage(i9);
    j14.scale = 2.15;
    j14.rotation = 180;

    j15 = createSprite(3680,1060);
    j15.addImage(i9);
    j15.scale = 2.1;
   // j15.rotation = 180;

    j16 = createSprite(3420,-210);
    j16.addImage(i9);
    j16.scale = 2.1;
    j16.rotation = -90;

    j17 = createSprite(-1230,4280);
    j17.addImage(i10);
    j17.scale = 2.05;

    j18 = createSprite(2180,4250);
    j18.addImage(i11);
    j18.scale = 2.05;

    j19 = createSprite(2910,4250);
    j19.addImage(i11);
    j19.scale = 1.85;

    j20 = createSprite(-2900,4010);
    j20.addImage(i12);
    j20.scale = 2.2;
    j20.rotation = -69;

    j25 = createSprite(-4860,1310);
    j25.addImage(i12);
    j25.scale = 1.75;
    j25.rotation = -29;

    j21 = createSprite(-3910,3310);
    j21.addImage(i14);
    j21.scale = 1.8;
    j21.rotation = -35;

    j23 = createSprite(-3810,1690);
    j23.addImage(i14);
    j23.scale = 1.9;
    j23.rotation = 128;
    
    j22 = createSprite(-2720,1960);
    j22.addImage(i13);
    j22.scale = 1.75;

    j24 = createSprite(-4440,2400);
    j24.addImage(i14);
    j24.scale = 2.5;
    j24.rotation = -29;

    j26 = createSprite(2520,2980);
    j26.addImage(i15);
    j26.scale = 3.35;
    //j26.rotation = -29;

    j27 = createSprite(440,3180);
    j27.addImage(i16);
    j27.scale = 2.1;
    
    j28 = createSprite(920,3180);
    j28.addImage(i16);
    j28.scale = 2.1;

    j31 = createSprite(5540,2450);
    j31.addImage(i18);
    j31.scale = 3.15;
    j31.rotation = -151;

    j32 = createSprite(6130,1300);
    j32.addImage(i4);
    j32.scale = 1.7;
    j32.rotation = 108;

    j33 = createSprite(6120,-550);
    j33.addImage(i12);
    j33.scale = 2.3;
    j33.rotation = -214;

    j34 = createSprite(5250,-1840);
    j34.addImage(i12);
    j34.scale = 2.15;
    j34.rotation = -218;

    j35 = createSprite(4180,-2680);
    j35.addImage(i12);
    j35.scale = 1.7;
    j35.rotation = -254;

    j36 = createSprite(5260,-460);
    j36.addImage(i12);
    j36.scale = 2.25;
    j36.rotation = -36;

    j37 = createSprite(4810,-1040);
    j37.addImage(i19);
    j37.scale = 1.85;
    j37.rotation = -5;

    j38 = createSprite(5360,1190);
    j38.addImage(i20);
    j38.scale = 3.44;
    j38.rotation = -45;

    j39 = createSprite(5080,1510);
    j39.addImage(i12);
    j39.scale = 1.2;
    j39.rotation = 41;

    j40 = createSprite(4810,290);
    j40.addImage(i21);
    j40.scale = 3.44;
   // j40.rotation = 41;
   
    j41 = createSprite(2329,2010);
    j41.addImage(i22);
    j41.scale = 3.44;

    j43 = createSprite(-1220,2700);
    j43.addImage(i24);
    j43.scale = 3.349;

    j44 = createSprite(-920,2010);
    j44.addImage(i25);
    j44.scale = 3.349;

    j45 = createSprite(-3290,530);
    j45.addImage(i26);
    j45.scale = 2.05;

    j46 = createSprite(-4010,800);
    j46.addImage(i27);
    j46.scale = 2.05;

    j47 = createSprite(-4010,310);
    j47.addImage(i27);
    j47.scale = 2.05;

    j48 = createSprite(-5240,800);
    j48.addImage(i27);
    j48.scale = 2.05;

    j49 = createSprite(-5240,310);
    j49.addImage(i27);
    j49.scale = 2.05;

    j50 = createSprite(5380,810);
    j50.addImage(i27);
    j50.scale = 2.05;

    j51 = createSprite(6620,310);
    j51.addImage(i27);
    j51.scale = 2.05;

    j52 = createSprite(6620,800);
    j52.addImage(i27);
    j52.scale = 2.05;

    j53 = createSprite(-2900,2560);
    j53.addImage(i28);
    j53.scale = 2.05;

    j54 = createSprite(-450,-310);
    j54.addImage(i29);
    j54.scale = 3.299;

    j55 = createSprite(-450,-310);
    j55.addImage(i29);
    j55.scale = 3.299;

    j56 = createSprite(1810,-300);
    j56.addImage(i30);
    j56.scale = 3.299;

    j57 = createSprite(-3270,-1290);
    j57.addImage(i31);
    j57.scale = 2;

    j58 = createSprite(-2340,-2008);
    j58.addImage(i32);
    j58.scale = 2.1;

    j59 = createSprite(-850,-2950,2.599);
    j59.addImage(i33);
    j59.scale = 2.599;

    j60 = createSprite(1980,-2970);
    j60.addImage(i34);
    j60.scale = 2.599;




  

    a = 2400;
    b = 2010;
    c = 2;
    d = 0;



    camera.on();
    camera.zoom = 0.3;

}
function draw(){
    background(159,159,164);


    Engine.update(engine);

    var pos = b3.body.position;
    player.x = pos.x;
    player.y = pos.y;

/*
    j60.x = a;
    j60.y = b;
    j60.scale = c;
    j60.rotation = d;  
  
*/
  
    keyPressed();

    drawSprites();

    Matter.Body.setStatic(b3.body,false);
    
    camera.position.x = b3.body.position.x;
    camera.position.y = b3.body.position.y-100;

    if (keyDown("left")) {

      player.addAnimation("walking",ani);
  
      }
      else{
        player.addImage("walking",man);

      }

 /*   if(keyWentUp("left")){

      player.addImage("walking",man);
      console.log(" ho gya dubara")

    }*/
    

        
    if(keyDown("SHIFT")&&keyDown("1")){
      a = a+10;
    }

    if(keyDown("SHIFT")&&keyDown("2")){
      a = a-10;
    }

    if(keyDown("SHIFT")&&keyDown("3")){
      b = b+10;
    }

    if(keyDown("SHIFT")&&keyDown("4")){
      b = b-10;
    }

    if(keyDown("SHIFT")&&keyDown("5")){
      c = c+0.05;
    }

    if(keyDown("SHIFT")&&keyDown("6")){
      c = c-0.05;
    }

    if(keyDown("SHIFT")&&keyDown("7")){
      d = d+1;
    }

    if(keyDown("SHIFT")&&keyDown("9")){
      d = d-1;
    }
    

    

    textSize(40);
    fill("indigo");

    text(a+" "+b+" "+c+" "+d,b3.body.position.x,b3.body.position.y);

}




function keyPressed() {


  


    if(keyDown("UP_ARROW")){

        Matter.Body.applyForce(b3.body,b3.body.position,{x:0,y:-0.004})

    }

    
    if (keyDown("DOWN_ARROW") ) {

        Matter.Body.applyForce(b3.body,b3.body.position,{x:0,y:0.004})
    
        }


    if (keyDown("RIGHT_ARROW")) {

        Matter.Body.applyForce(b3.body,b3.body.position,{x:0.01,y:0})
    
        }

    if (keyDown("LEFT_ARROW")) {

        Matter.Body.applyForce(b3.body,b3.body.position,{x:-0.01,y:0});
        player.changeAnimation("animation",ani);
        console.log("ho gya ");
    
        }

    if (keyDown("N")) {
        B1.scale = B1.scale-0.01;
      }

    if (keyDown("M")) {
        B1.scale = B1.scale+0.01;
      }


      
  if (keyDown("8")) {
    camera.zoom = camera.zoom - 0.01;
  }
  if (keyDown("0")) {
    camera.zoom = camera.zoom + 0.01;
  } 


  if (keyDown("SPACE")) {
    Matter.Body.setStatic(b3.body,true);
  }
  if (keyDown("F")) {
    Matter.Body.setStatic(b3.body,false);
  }


}