//Create variables here
var dog,dogFood , dogimg
var dogimg
var  foodS

var database
function preload()
{
	//load images here
  dogimg = loadImage("dogImg.png")
  dogeimg = loadImage("dogImg1.png")
} 


function setup() {
  createCanvas(800, 700);
  
  database = firebase.database()
  
dog = createSprite(400,350,20,40)
dog.addImage(dogimg)
//dog.addImage(dogeimg);
  dog.scale = 0.2

  FoodStock = database.ref('food')
  FoodStock.on("value",readStock);


}


function draw() {  
  background(50, 139, 90)

 
  //add styles here
 
  
 

   if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogeimg)
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogimg)
  }

  drawSprites();

  fill("brown")
  textSize(30)
  text("Food Remaining" + foodS,200,200)
   

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}
