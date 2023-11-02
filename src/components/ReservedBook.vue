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
    </router-link>
    <div class="book-details">
      <div>
        <router-link :to="{ name: 'BookDetailPage', params: { id: book!.title } }">
          <div class="book-title"><h3>{{ book!.title }}</h3></div>
        </router-link>
        <div class="book-author">{{ book!.author }}</div>
        <div class="book-availability">
          <i class="fa-solid fa-circle" :class="availabilityClass"></i>
          couocu
        </div>
      </div>

      <router-link :to="{ name: 'BookDetailPage', params: { id: book!.title } }">
        <button class="colored-button" data-modal-target=".my-modal" :class="availabilityClass" @click="buttonClick" >
          <i class="fa-solid fa-qrcode"></i>
          Emprunter
        </button>
      </router-link>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.book-cover {
  display: flex;
  margin: 10px 0;
  width: 100%;
  .img-container  {
    width: 100px;
    margin-right: $spacing;
  }
  .book-title >h3 {
    font-size: $book-title-size;
    color: $dark;
  }
  .book-details {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  }
  .colored-button {
    background: none;
    border: $corner-thickness solid $light-dark;
    color: $primary;
  }

}

</style>