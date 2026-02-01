class Player {
  constructor() {
    this.x = 100;
    this.y = 220;
    this.w = 20;
    this.h = 20;
    this.speed = 3;
    this.hp = 100;
  }

  update(keys) {
    if (keys["w"]) this.y -= this.speed;
    if (keys["s"]) this.y += this.speed;
    if (keys["a"]) this.x -= this.speed;
    if (keys["d"]) this.x += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "#4af";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
