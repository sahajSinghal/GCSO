var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,40,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;

    car.x = 1455;

    var deformation = (0.5 * weight * speed * speed)/22509;
    if(deformation <= 100){
      car.shapeColor = "green";
    }
    else if(deformation > 100 && deformation <= 180){
      car.shapeColor = "yellow";
    }
    else if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}