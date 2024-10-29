<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand" href="#">Spiel-Wiese</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link active">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/tamagotchi" class="nav-link">Tamagotchi</RouterLink>
          <RouterLink to="/" class="nav-link">Memory</RouterLink>

        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
