<script lang="ts">
import BooksService from "../services/BooksService.ts";
import CheckableTag from "../components/CheckableTag.vue";

export default {
  components: {CheckableTag},
  data() {
    return {
      //...
      book: null
    };
  },
  created() {
    new BooksService().getBooks().then((books) => {
      this.book = (books.find((book) => book.title === this.$route.params.id));
    }).catch((error) => {
      console.log(error);
    });
  }
};
</script>

<template>
  <div v-if="book == null">
    <h1>Livre introuvable!</h1>
  </div>
  <div v-else>
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
        <div>
          <p>{{ book.status }}</p>
        </div>
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