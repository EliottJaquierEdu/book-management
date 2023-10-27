<script lang="ts">
import Book from "../models/Book";
import {ref, toRefs} from 'vue'

function getBookStatusAvailabilityClass(book: Book) {
  switch (book.status) {
    case "Réservable":
      return "green";
    case "Disponible":
      return "orange";
    case "En transit":
      return "orange";
    case "Plus en stock":
      return "red";
    default:
      return "red";
  }
}

export default {
  props: {
    book: (Object as () => Book)!
  },
  setup(props) {
    const { book } = toRefs(props)
    const availabilityClass = ref(getBookStatusAvailabilityClass(book.value!));
    return {
      availabilityClass
    }
  },
}
</script>

<template>
  <div class="book-cover">
    <router-link :to="{ name: 'BookDetailPage', params: { id: book!.title } }">
      <div class="img-container">
        <div><img class="flat-border" :src="book!.image" :alt="book!.title"></div>
      </div>
      <div class="book-title"><h3>{{ book!.title }}</h3></div>
      <div class="book-author">{{ book!.author }}</div>
      <div class="book-availability"><i class="fa-solid fa-circle" :class="availabilityClass"></i> {{ book!.status }}</div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.book-cover{
  width: 175px;
  margin-bottom: $content-margin;
  a{
    text-decoration: none;
  }
  .img-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 263px;
  }
  .book-title{
    margin-top: $spacing;
    h3{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $interactable-text-size;
      font-weight: bold;
      color: $text;
    }
  }
  .book-author{
    font-size: $interactable-text-size;
    color: $text;
  }
  .book-availability{
    font-size: $small-text-size;
    color: $text-light;
  }
  /* TRANSITION */
  &:hover{
    transition: all 0.1s;
    background-color: $lighter;
    border-radius: $corner-radius;
  }
}
</style>