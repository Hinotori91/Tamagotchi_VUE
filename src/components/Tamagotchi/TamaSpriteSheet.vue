<template>
  <canvas id="myCanvas" class="bg-success" width="700" height="70"></canvas>

</template>

<script setup>
import { onMounted } from "vue";

let img = new Image();

let canvas;
let ctx;

img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';


onMounted(() => {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext('2d');
}),

  img.onload = function () {
    init();
  };

const scale = 3;
const width = 16;
const height = 18;
const scaleWidth = scale * width;
const scaleHeight = scale * height;

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 3;

let tamagotchi_posx = 0;
let tamagotchi_posy = 0;

let window_width = window.innerWidth;
let window_height = window.innerHeight;

function init() {
  window.requestAnimationFrame(step);
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
    frameX * width, frameY * height, width, height,
    canvasX, canvasY, scaleWidth, scaleHeight);
}

function step() {
  frameCount++;
  if (frameCount < 15) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  move_constant();
}

function move_constant() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  checkTransitions();
  executeState();

  function checkTransitions() {
    if (currentDirection == 3) {
      // transition 1
      if (tamagotchi_posx + 70 > canvas.width) {
        currentDirection = 2;
      }
      // state 2
    } else if (currentDirection == 2) {
      // transition 1
      if (tamagotchi_posx <= 0) {
        currentDirection = 3;
      }
    }
  }

  function executeState() {
    if (currentDirection == 3) {
      move_right();
    }
    if (currentDirection == 2) {
      move_left();
    }
  }
}

function move_right() {
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, tamagotchi_posx, tamagotchi_posy);
  currentLoopIndex++;

  tamagotchi_posx += 10;
  window.requestAnimationFrame(step);
}

function move_left() {
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, tamagotchi_posx, tamagotchi_posy);
  currentLoopIndex++;

  tamagotchi_posx -= 10;
  window.requestAnimationFrame(step);
}
</script>
<style>

</style>