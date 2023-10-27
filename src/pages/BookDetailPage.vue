<script lang="ts">
import BooksService from "../services/BooksService.ts";
import {ref} from "vue";
import Book from "../models/Book.ts";
import {useRoute} from "vue-router";
import CheckableTag from "../components/CheckableTag.vue";

export default {
  components: {CheckableTag},
  setup() {
    const book = ref(undefined as unknown as Book);
    const isBookFound = ref(true);
    const route = useRoute()
    const availabilityClass = ref("");
    const buttonLabel = ref("");
    BooksService.getBooks().then((books) => {
      const findBool = (books.find((book) => book.title === route.params["id"])) as Book | undefined;
      isBookFound.value = findBool !== undefined;
      book.value = findBool as Book;
      availabilityClass.value = BooksService.getBookStatusColor(book.value!)+ "-bg";
      buttonLabel.value = BooksService.getBookStatusAction(book.value!);
    }).catch((error) => {
      console.log(error);
      isBookFound.value = false;
    });
    return {
      book,
      isBookFound,
      availabilityClass,
      buttonLabel
    }
  },
  methods:
    {
      buttonClick() {
        BooksService.reserveBook(this.book!);
      }
    }
}
</script>

<template>
  <div v-if="!isBookFound">
    <h1>Livre introuvable!</h1>
  </div>
  <div v-else-if="book">
    <div class="book-row">
      <div class="book-image">
        <img class="flat-border" :src="book.image" alt="book.title">
      </div>
      <div class="bool-info-column">
        <div><h1>{{ book.title }}</h1></div>
        <div><p class="author">{{ book.author }}</p></div>
        <div>
          <p class="infos">{{ book.date }} - {{ book.editor }} - {{ book.pages }} pages</p>
        </div>
        <button class="colored-button" :class="availabilityClass" @click="buttonClick">
          {{ buttonLabel }}
        </button>
      </div>
    </div>
    <div class="spacing"></div>
    <h2>A propos de ce livre</h2>
    <p><strong>{{ book.synopsis }}</strong></p>
    <p>{{ book.description }}</p>
    <div class="spacing"></div>
    <h2>Détails</h2>
    <span>Pages : {{ book.pages }}</span>
    <br>
    <div class="genres">
      <div class="genre" v-for="genre in book.genres" >
        <checkable-tag :label="genre" :value="genre"></checkable-tag>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.book-row {
  margin-top: $spacing-separation-big;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .book-image {
    flex-grow: 0;
    margin-right: $spacing-separation;
    max-width: 35%;
  }

  .bool-info-column {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;

    h1 {
      margin: 0;
      font-size: $book-title-size;
    }

    p {
      margin: 0;
      font-size: $small-text-size;
    }

    .author {
      font-size: $book-subtitle-size;
    }

    .infos {
      color: $text-light
    }

    .colored-button{
      margin-top: $spacing;
    }
  }
}

.genres {
  display: flex;
  flex-wrap: wrap;
  .genre{
    flex-grow: 1;
    button {
      width: calc(100% - 2 * $spacing-small);
      margin: $spacing-small 0;
    }
  }
}
</style>