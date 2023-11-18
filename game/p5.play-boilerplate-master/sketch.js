// Jungle Adventure Game

// Create Adventurer
var adventurer = createSprite(50, 300);
adventurer.setAnimation("adventurer_idle");

// Main Game Loop
function draw() {
  // Clear the screen
  background("forest_background");

  // Move Adventurer
  if (keyDown("right")) {
    adventurer.x += 5;
  }
  if (keyDown("left")) {
    adventurer.x -= 5;
  }

  // Add Gravity
  adventurer.velocityY += 1;

  // Make Adventurer Jump
  if (keyWentDown("space") && adventurer.y > 250) {
    adventurer.velocityY = -15;
  }

  // Display Adventurer
  drawSprites();
}
