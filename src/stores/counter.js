import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTamagotchiStore = defineStore('tamagotchis', {
  state: () => ({
    tamagotchi: [
      {
        name: "Tamagotchi Name",
        energy: 100,
        langeweile: 100
      }
    ],
    // foodValues: [
    buttons: [
      {
        name: 'ananas',
        val: 5,
        image: 'src/assets/Tamagotchi/ananas.gif'
      },
      {
        name: 'apfel',
        val: 2,
        image: 'src/assets/Tamagotchi/apfel.gif'
      },
      {
        name: 'banane',
        val: 3,
        image: 'src/assets/Tamagotchi/banane.gif'
      },
      {
        name: 'schlafen',
        val: 100,
        image: 'src/assets/Tamagotchi/zzz.gif'
      }
    ]
  })
});
