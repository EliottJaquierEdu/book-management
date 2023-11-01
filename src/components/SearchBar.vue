<script lang="ts">
import {ref} from "vue";
</script>


<template>
  <div id="search">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="search" placeholder="Rechercher des livres...">
  </div>
</template>

<style scoped>
#search {
  display: flex;
  align-items: center;
  background-color: $primary;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin: 2rem 0;
}

#search input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  color: #333;
  margin: 0;
  padding: 0.5rem;
}

#search input::placeholder {
  color: #aaa;
}
</style>
