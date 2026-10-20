class Mothership {
  static WIDTH = 50;
  static HEIGHT = 20;
  static PICKUP_DIAMETER = Mothership.WIDTH * 1.2;
  static CORNER_RADIUS = 8;
  static NUM_PORTHOLES = 4;
  static PORTHOLE_DIAMETER = 6;

  physics;

  constructor() {
    this.physics = new Physics();
  }

  draw() {
    push();
    drawEverywhere({
      offset: this.physics,
      drawFn: () => {
        Mothership.drawMothership({ rotation: this.physics.rotation });
        if (game.debug) {
          this.physics.draw();
          noFill();
          stroke("#fff");
          circle(0, 0, Mothership.PICKUP_DIAMETER);
        }
      },
    });
    pop();
  }

  /**
   * Draws the Mothership's shape around (0, 0). Assumes the caller has
   * already moved the transform to wherever the Mothership should appear.
   **/
  static drawMothership({ rotation }) {
    // TODO (Phase 1): Replace the placeholder with the Mothership: a rounded
    // rectangle, Mothership.WIDTH by Mothership.HEIGHT, with a row of
    // Mothership.NUM_PORTHOLES evenly spaced circular windows along the
    // middle. Draw it around (0, 0), rotated by `rotation`.

// Portholes: Mothership.NUM_PORTHOLES circles, Mothership.PORTHOLE_DIAMETER across, evenly spaced along the middle. Hint: use a loop and place circles along a line.

    push()
    rotate(rotation)
    fill("orchid")
    rectMode(CENTER)
    rect(0, 0, Mothership.WIDTH, Mothership.HEIGHT, Mothership.CORNER_RADIUS, Mothership.CORNER_RADIUS, Mothership.CORNER_RADIUS, Mothership.CORNER_RADIUS)
    for(let porthole = 0; porthole < Mothership.NUM_PORTHOLES; porthole++) {
      fill("teal")
      circle((-0.5 * Mothership.WIDTH + Mothership.PORTHOLE_DIAMETER) + (Mothership.WIDTH / Mothership.NUM_PORTHOLES) * porthole, 0, Mothership.PORTHOLE_DIAMETER)
    }
    pop()
  }

  move(delta) {
    this.physics.move(delta, { constrain: true });
  }
}
