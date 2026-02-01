const stages = {
  current: 1,

  load(stage, game) {
    game.enemies = [];

    if (stage === 1) {
      startDialogue(dialogues.stage1);
      game.enemies.push(new Enemy(550, 220));
    }

    if (stage === 2) {
      startDialogue(dialogues.library);
      game.enemies.push(new Enemy(500, 200));
      game.enemies.push(new Enemy(550, 260));
    }
  }
};
