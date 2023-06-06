// Play with Player Movement

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let player = {
  x: 375,
  y: 550,
  w: 50,
  h: 50,
  xSpeed: 0,
  ySpeed: 0,
};

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic

  // Move player by xSpeed and ySpeed
  player.x += player.xSpeed;
  player.y += player.ySpeed;
  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Player
  ctx.fillStyle = "orange";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Request another Animation Frame
  requestAnimationFrame(draw);
}

//Key Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event);
  if (!event.repeat) {
    //Step Movement
    if (event.code == "ArrowRight") {
      player.xSpeed = player.speed;
      player.ySpeed = 0;
    } else if (event.code == "ArrowLeft") {
      player.xSpeed = player.speed;
      player.ySpeed = 0;
    } else if (event.code == "ArrowUp") {
      player.xSpeed = 0;
      player.ySpeed = player.speed;
    } else if (event.code == "ArrowDown") {
      player.xSpeed = 0;
      player.ySpeed = player.speed;
    }
  }
}

//if (event.code == "ArrowRight") {
//player.x += 50;
//} else if (event.code == "ArrowLeft") {
//player.x += -50;
//} else if (event.code == "ArrowUp") {
//player.y += -50;
//} else if (event.code == "ArrowDown") {
//player.y += 50;
//}
