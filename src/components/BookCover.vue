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
    <a href="#">
      <div class="img-container">
        <div><img :src="book!.image" :alt="book!.title"></div>
      </div>
      <div class="book-title"><h3>{{ book!.title }}</h3></div>
      <div class="book-author">{{ book!.author }}</div>
      <div class="book-availability"><i class="fa-solid fa-circle" :class="availabilityClass"></i> {{ book!.status }}</div>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.book-cover{
  width: 175px;
  margin-bottom: $content-margin;
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
  .book-title{
    margin-top: $spacing;
    h3{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $interactable-text-size;
      font-weight: bold;
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
}
</style>