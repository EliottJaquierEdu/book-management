<script setup lang="ts">
import {ref, toRefs} from 'vue';
import TopBar from "../components/TopBar.vue";
import SearchBar from "../components/SearchBar.vue";
import CheckableTag from "../components/CheckableTag.vue";
import BooksService from "../services/BooksService.ts";
import BorrowingBook from "../components/BorrowingBook.vue";
import ReservedBook from "../components/ReservedBook.vue";
import Book from "../models/Book";

const props = defineProps(['bookReserved']);

const bookedbooks: any = ref(null);
async  function  fetchBooks(){
  const response = await fetch('src/assets/bookedBook.json');
  bookedbooks.value =  await response.json();
}
fetchBooks();
</script>

<template>
  <h2>Mes livres empruntés</h2>
  <div class="books">
    <div class="book-result" v-for="book in bookedbooks">
      <BorrowingBook :book="book" ></BorrowingBook>
    </div>
  </div>
  <h2>Livres réservés</h2>
  <div class="books">
    <div class="book-result" v-for="book in props.bookReserved">
      <ReservedBook :book="book"></ReservedBook>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
.filter-category{
  margin-bottom: $spacing-separation;
}
.filter-category-items {
  display: flex;
  flex-wrap: wrap;
}
.filter-category-item{
  flex-grow: 1;
  button{
    width: calc(100% - 2 * $spacing-small);
    margin: $spacing-small 0;
  }
}
.books{
  .book-result{
    width: 100%;
    margin-bottom: $spacing-separation;
  }
}
</style>