<script setup>
import TamagotchiLogic from '@/components/Tamagotchi/Tamagotchi-Logic.vue';
import TamaSpriteSheet from '@/components/Tamagotchi/TamaSpriteSheet.vue';

let visible = true;
</script>

<template>
  <!-- header-nav-bar with title -->
  <v-card width="700">
    <div>
      <v-toolbar dark prominent image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title>
          Tamagotchi
        </v-toolbar-title>
      </v-toolbar>
    </div>
  </v-card>

  <!-- main section for the game -->
  <v-card width="700">
    <img id="background" src="../assets/Tamagotchi/Background/77ca4835ef70bef35a0eb133b010e3e5.jpg" alt="background">
    <TamagotchiLogic>
      <template v-slot:spritesheet>
        <div v-if="visible = true">
          <TamaSpriteSheet></TamaSpriteSheet>
        </div>
      </template>
    </TamagotchiLogic>
  </v-card>
</template>

<style scoped>
#background {
  opacity: 0.5;
  position: absolute;
  z-index: -1;
}
</style>