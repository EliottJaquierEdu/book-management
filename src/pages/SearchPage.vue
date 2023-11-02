<script setup lang="ts">
import {ref} from 'vue'
import TopBar from "../components/TopBar.vue";
import SearchBar from "../components/SearchBar.vue";
import CheckableTag from "../components/CheckableTag.vue";
import BooksService from "../services/BooksService.ts";
import BookCover from "../components/BookCover.vue";

const filtersList = ref([
  {
    name: "Langues",
    filters: [
      {
        name: "Français",
        value: "fr"
      },
      {
        name: "Anglais",
        value: "en"
      },
      {
        name: "Allemand",
        value: "de"
      },
      {
        name: "Espagnol",
        value: "es"
      }
    ]
  },
  {
    name: "Genre et forme",
    filters: [
      {
        name: "Roman",
        value: "roman"
      },
      {
        name: "Nouvelle",
        value: "nouvelle"
      },
      {
        name: "Poésie",
        value: "poesie"
      },
      {
        name: "Biographie",
        value: "biographie"
      },
      {
        name: "Journal",
        value: "journal"
      },
    ]
  },
  {
    name: "Sujet",
    filters: [
      {
        name: "Amour",
        value: "amour"
      },
      {
        name: "Informatique",
        value: "informatique"
      },
      {
        name: "Famille",
        value: "famille"
      },
      {
        name: "Nature",
        value: "nature"
      },
      {
        name: "Voyage",
        value: "voyage"
      },
      {
        name: "Politique",
        value: "politique"
      },
      {
        name: "Religion",
        value: "religion"
      },
      {
        name: "Philosophie",
        value: "philosophie"
      }
    ]
  },
  {
    name: "Status",
    filters: [
      {
        name: "Disponible",
        value: "disponible",
      },
      {
        name: "Réservable",
        value: "reservable",
      },
      {
        name: "Plus en stock",
        value: "plusEnStock",
      },
      {
        name: "En transit",
        value: "enTransit",
      }
    ]
  }
]);

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
  <SearchBar></SearchBar>
  <h2>Filtres</h2>
  <div class="filters">
    <div v-for="filter in filtersList" class="filter-category">
      <h3>{{ filter.name }}</h3>
      <div class="filter-category-items">
        <div class="filter-category-item" v-for="filterItem in filter.filters">
          <CheckableTag :label="filterItem.name" :value="filterItem.value"></CheckableTag>
        </div>
      </div>
    </div>
  </div>
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
    width: 175px;
    max-width: calc(50% - 10px);
  }
}
</style>