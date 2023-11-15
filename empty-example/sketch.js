var diam1 = 0; //declared and initialized the custom variable. 
var r = 0;
var g = 0;
var b = 0;
var a = 0.2;
var diamStar = 10;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
  // put drawing code here
    background (0,0,0);
    fill("#Add8e6"); //hex light blue
    stroke("#ffff00");
    strokeWeight(5);
    //ellipse(mouseX, mouseY,20,20);
    fill("#ff0000");
    ellipse(random(20,30),random(100,110),20,20);
    noStroke();
    ellipse(200,250,diam1,diam1);
    //diam1 = diam1+1;
    rectMode(CENTER); //sets the anchor point at the center
    rect(50,200,20,20);
    triangle(width/2,height/2,350,350,150,350);
    stroke("#ffff00");
    strokeWeight(5);
    line(200,100,200,200);
    point(width/2, height/2);
    noStroke();
    textSize(20);
    textStyle(ITALIC);
    textFont('Courier New');
    text("hello", 10, 30);
    fill(r,g,b);
    ellipse(width/2, height/2, 20, 20);
    fill('rgba(255,255,255,a)');
    a = random (0,1);
    ellipse(400,300,50,50);
    ellipse(20,100,2,2);
    ellipse(121,50,5,5);
    stroke(255);
    strokeWeight (2);
    noFill();
    arc(400, 50, 100, 100, PI, 0);
    arc(400, 200, 100, 100, 0, PI);
    console.log(a);
}
function mousePressed(){
    if (diam1 >= 50){
        diam1=0;
    }else{
        diam1 = diam1+5;
    }
}
function keyTyped(){
    if (key === 'c'){
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);  
    }
}
