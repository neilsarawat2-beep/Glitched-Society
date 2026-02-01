let activeDialogue = null;
let dialogueIndex = 0;

function startDialogue(dialogue) {
  activeDialogue = dialogue;
  dialogueIndex = 0;
}

function drawDialogue(ctx) {
  if (!activeDialogue) return;

  ctx.fillStyle = "rgba(0,0,0,0.85)";
  ctx.fillRect(40, 300, 720, 150);

  ctx.fillStyle = "white";
  ctx.fillText(activeDialogue[dialogueIndex], 60, 340);
  ctx.fillText("Press SPACE", 60, 420);
}

function nextDialogue() {
  if (!activeDialogue) return;

  dialogueIndex++;
  if (dialogueIndex >= activeDialogue.length) {
    activeDialogue = null;
  }
}
