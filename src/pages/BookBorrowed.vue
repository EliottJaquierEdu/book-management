<script setup lang="ts">
import {ref, toRefs} from 'vue';
import BooksService from "../services/BooksService.ts";
import BorrowingBook from "../components/BorrowingBook.vue";
import ReservedBook from "../components/ReservedBook.vue";

const props = defineProps(['bookReserved']);

const bookedbooks: any = ref(null);
async  function  fetchBooks(){
  bookedbooks.value = (await BooksService.getBooks()).splice(0, 4);
}

fetchBooks();
</script>

<template>
  <div class="spacing"></div>
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