let adress;
let rectText;
let logo;
let IGlink = 'IG @vervegaleria';
let txtTel = '+55 11 3237 3247';

let paleta = ["#ff7900", "#fec1e9", "#b4b4b4", "#d6ab29", "#7296f7" ];


function preload() {
  adress = loadFont('Panama.otf');
  logo = loadImage("verve_high.png");
  rectText = loadFont('NeueHaasUnicaPro-Medium.ttf');
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // logo.resize(90,0)
  // let tamanho = logo.height
  // print(tamanho);

}

function draw() {
  noLoop();
 


  background(255); 
  

  if (windowWidth >= 400) {
    texttt(0,0);
    textttLeft(windowWidth/2 + 70, 0);

  
  }
  else {
    textttMobile(0,0)
    
  }
  
  randCol=random(paleta.length);

  randCol=floor(randCol);
  
push(); 
  rectMode(CENTER);
  fill(paleta[randCol]);
  noStroke();
  if (windowWidth >= 400) {
     rect(windowWidth/2, windowHeight/2, 450, 590);
  } 
  else { 
  rect(windowWidth/2, windowHeight/2, 240, 350);
  }
pop();
  
  
  let myValueX = windowWidth/2 - 450/2;
  // print(myValueX);
  
   let myValueY = windowHeight/2 - 590/2;
  // print(myValueY);
  
  let myValueXmobile = windowWidth/2 - 280/2;
  // print(myValueXmobile);
  
   let myValueYmobile = windowHeight/2 - 350/2;
  // print(myValueYmobile);
  
  textFont(rectText);
  
   if (windowWidth >= 400) {
     textSize(60);
    textLeading(55);
    text('Site em construção', myValueX + 40, myValueY + 10, 300, 150);
  } 
  else { 
    textSize(30);
  textLeading(25);
        text('Site em construção', myValueXmobile + 25, myValueYmobile + 20, 150, 150);
  } 
  
  
  if (windowWidth >= 400) {
   
    image(logo, windowWidth/2 - 40, myValueY + 555, 90, 14);
  }
  else {
    imageMode(CENTER);
    image(logo, windowWidth/2, myValueYmobile + 390, 90, 14);
  }
  
  
 
}

function texttt(x,y){
  textFont(adress);
  textSize(64);
  textLeading(64);
  text('Avenida São Luis 192 Ed Louvre SL06 (SP, BR)', x + 20, windowHeight/3, 581, 235);
  image(logo, x + 22, windowHeight/3 - 40, 90, 14);
  textSize(23)
  text(txtTel, x + 195  , windowHeight - 95)
}

function textttLeft(x,y){
  textFont(adress);
  textSize(64);
  textLeading(64);
  text('Avenida São Luis 192 Ed Louvre SL06 (SP, BR)', x + 20, windowHeight/3, 581, 235);
  image(logo, x + 22, windowHeight/3 - 40, 90, 14);
  textSize(23)
  text(IGlink, x + 195  , windowHeight - 95);
}

function textttMobile(x,y){
  textFont(adress);
  textSize(50);
  textLeading(50);
  text('Avenida São Luis 192 Ed Louvre SL06 (SP, BR)', x + 20, windowHeight/3 - 150, 350, 400);
  image(logo, x + 22, windowHeight/3 - 190, 90, 14);
    textSize(16);
    text(IGlink, windowWidth/2 - 70, windowHeight - 75);
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
