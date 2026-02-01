class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.hp = 30;
    this.speed = 1;
  }

  update(player) {
    if (player.x < this.x) this.x -= this.speed;
    if (player.x > this.x) this.x += this.speed;
    if (player.y < this.y) this.y -= this.speed;
    if (player.y > this.y) this.y += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "#f44";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
