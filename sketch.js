//Create variables here
var dog, hapdog, database, foodS, foodStock;

function preload() {
  dogIMG = loadImage("pics/Dog.png");
  hapdog = loadImage("pics/happydog.png");
}
function setup() {
  createCanvas(500, 500);
 dog = Bodies.rect(250,250, 50, 50);
 dog.addImage(dogIMG);
 World.add(world, dog);


database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  if (keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hapdog);
  }
  
  textSize(24);
   fill("white");
   stroke("blue");
   text("Press up arrow to feed Rocky!", width/2, 50);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



