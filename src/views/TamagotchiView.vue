<template>
  <h1>Tamagotchi</h1>

  <div id="textFeld"></div>
  <div id="fenster">
    <div class="ueberHerz">
      <div id="herz"><img src="../assets/Tamagotchi/herz.png" alt="Herz" width="100px"></div>
      <div id="herzTf"></div>
    </div>
  </div>
  <div id="nameTF">Tamagotchi Name:</div>
  <TamaSpriteSheet></TamaSpriteSheet>


  <div>

    <img :src="store.buttons[0].image" alt="Ananas" id="ananas" class="food-button">

    <img :src="store.buttons[1].image" alt="Apfel" id="apfel" class="food-button">

    <img :src="store.buttons[2].image" alt="Banane" id="banane" class="food-button">

    <img :src="store.buttons[3].image" alt="Schlafen" id="schlafen">
  </div>
</template>
  
<script setup>
import TamaSpriteSheet from '@/components/Tamagotchi/TamaSpriteSheet.vue';

import { useTamagotchiStore } from '../stores/counter.js';
import { defineEmits } from 'vue';

const store = useTamagotchiStore();

console.log(store.buttons[0].image);


const emit = defineEmits(['ananasBtn', 'apfelBtn', 'BananeBtn', 'schlafenBtn']);
</script>
  
<style>

</style>