<script setup lang="ts">
import Book from "../models/Book";

defineProps<{ book:Book }>()
</script>

<template>
  <div class="book-cover">
    <a href="#">
      <div class="img-container">
        <div><img :src="book.image" :alt="book.title"></div>
      </div>
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <p>Disponible</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.book-cover{
  width: 175px;
  .img-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 263px;
    img{
      border: $corner-thickness solid $light-dark;
      border-radius: $corner-radius;
    }
  }
}
</style>