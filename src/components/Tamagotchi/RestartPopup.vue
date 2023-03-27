<script setup>

</script>

<template>
  <div id="popup">
    <div id="background"></div>
    <div class="modal-body position-absolute top-50 start-50 translate-middle">
      <div class="card">
        <div class="card-header">
          <h5>Du hast dein Tamagotchi vernachlästig. Es ist gestorben!</h5>
        </div>
        <div class="card-body">
          <p class="btn btn-secondary">Erneut versuchen!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
}

#background {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.78);
}

#popup {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>