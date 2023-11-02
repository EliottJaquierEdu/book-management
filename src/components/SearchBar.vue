<script setup lang="ts"></script>

<template>
  <div id="search">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder="Rechercher des livres...">
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

#search {
  display: flex;
  align-items: center;
  background-color: $lightest;
  border: $corner-thickness solid $light-dark;
  border-radius: $corner-radius;
  width: 100%;
  margin: 2rem 0;

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
