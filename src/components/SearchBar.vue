<script setup lang="ts"></script>

<template>
  <div id="search" class="flat-border">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder="Rechercher des livres...">
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

#search {
  display: flex;
  align-items: center;
  border-radius: $corner-radius;
  width: 100%;
  margin: $button-text-size 0;

  input {
    border: none;
    outline: none;
    background: none;
    width: 100%;
    color: #333;
    margin: 0;
    padding: 0.5rem;
  }

  i {
    margin: 0 1rem;
    color: $primary;
  }

  input::placeholder {
    color: $text;
  }
}
</style>
