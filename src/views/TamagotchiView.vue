<template>
  <TamagotchiLogic>
    <template v-slot:spritesheet>
      <div v-if="visible = true">
        <TamaSpriteSheet></TamaSpriteSheet>
      </div>
    </template>
  </TamagotchiLogic>
</template>
  
<script setup>
import TamagotchiLogic from '@/components/Tamagotchi/Tamagotchi-Logic.vue';
import TamaSpriteSheet from '@/components/Tamagotchi/TamaSpriteSheet.vue';

let visible = true;
</script>
  
<style scoped></style>