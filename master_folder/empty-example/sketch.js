function setup(){
  createCanvas(600,400);
  background(255,255,0);

}

function draw(){

 
  rect(300,200,30,100);
}

function mousePressed(){
 fill(random(255),random(255),random(255));
 ellipse(mouseX,mouseY,30,30);

}
