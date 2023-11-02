<script setup lang="ts">
import {ref} from 'vue'
import TopBar from "../components/TopBar.vue";
import SearchBar from "../components/SearchBar.vue";
import CheckableTag from "../components/CheckableTag.vue";
import BooksService from "../services/BooksService.ts";
import BookCover from "../components/BookCover.vue";

const books: any = ref(null);
function fetchBooks(){
  BooksService.getBooks().then((response) => {
    books.value = response;
  }).catch((error) => {
    console.log(error);
  });
}
fetchBooks();
</script>

<template>
  <h2>Résultats</h2>
  <div class="books">
    <div class="book-result" v-for="book in books">
      <BookCover :book="book"></BookCover>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .book-result{
    margin-bottom: $spacing-separation;
  }
}
</style>