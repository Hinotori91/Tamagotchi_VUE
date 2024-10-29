<script setup>
import { useTamagotchiStore } from '@/stores/counter.js';
import { ref } from 'vue';
import RestartPopup from "./RestartPopup.vue";

const store = useTamagotchiStore();

let energyCounter = ref(store.tamagotchi.energy);
let newTamaName = ref(store.tamagotchi.name);
let isVisible = false;

// For loosing Tamagotchi energy!!
let intervalID = setInterval(function () {
  if (energyCounter.value > 0) {
    energyCounter.value -= 5;
    console.log(energyCounter.value);
  } else {
    console.log("TOT");
    clearInterval(intervalID);
  }
}, 1000);
////////////////////////////////////

function isInputVisible() {
  isVisible = (isVisible == true) ? false : true;
  console.log(isVisible);
}
function saveNameInStore() {
  store.tamagotchi.name = newTamaName;
  isVisible = false;
}

function feed(button) {
  if (energyCounter.value >= 100) {
    energyCounter.value = 100;
  } else {
    energyCounter.value += button.val;
  }
  console.log(energyCounter);
}

function restart() {
  location.reload();
}
</script>

<template>
  <RestartPopup v-if="energyCounter == 0" @restart="restart"></RestartPopup>

  <div class="d-flex p-4 justify-center ga-5">
    <div id="herz">
      <div id="counter">{{ energyCounter }}</div>
    </div>
    <div id="nameTF">Tamagotchi Name:
      <span v-if="!isVisible">{{ store.tamagotchi.name }} <img src="src/assets/Icons/edit.svg" style="width:20px"
          alt="edit" @click="isInputVisible">
      </span>
      <span v-else><input type="text" v-model="newTamaName"> <img src="src/assets/Icons/check.svg" style="width:20px"
          alt="check" @click="saveNameInStore">
      </span>
    </div>
  </div>

  <slot name="spritesheet"></slot>

  <!-- <v-card color="primary"> -->
  <v-card>
    <div class="d-flex justify-space-around px-5">
      <img v-for="button of store.buttons" :src="button.image" :alt="button.name" @click="feed(button)">
    </div>
  </v-card>
</template>
  
<style scoped>
img {
  cursor: pointer;
}

#herz {
  background-image: url(src/assets/Tamagotchi/herz.png);
  background-size: 80px 80px;
  background-repeat: no-repeat;
  height: 80px;
  width: 80px;
}

#counter {
  padding-top: 18px;
  width: 80px;
  font-size: large;
  text-align: center;
}
</style>