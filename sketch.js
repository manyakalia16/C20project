var cat_standing, cat_moving, cat_end;
var catS, catM, catE;
var garden, gardenImg;
var mouseT, mouseW, mouseS;
var mouse_teasing, mouse_walking, mouse_standing;


function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catS = loadImage("cat1.png");
    catM= loadAnimation ("cat2.png", "cat3.png");
    catE = loadImage("cat4.png");
    mouseT = loadImage("mouse1.png");
    mouseW = loadAnimation("mouse2.png","mouse3.png");
    mouseS = loadImage(" mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(100,800);
    garden.addImage("gardenImg")
    cat_standing = createSprite(800,800,50,50);
    cat_standing.addimage("catS");

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
