<script lang="ts">
import BooksService from "../services/BooksService.ts";
import {ref} from "vue";
import Book from "../models/Book.ts";
import {useRoute} from "vue-router";
import CheckableTag from "../components/CheckableTag.vue";
import SelectableButton from "../components/SelectableButton.vue";
import BookCover from "../components/BookCover.vue";

export default {
  components: {BookCover, SelectableButton, CheckableTag},
  setup() {
    const books = ref(undefined as unknown as Book[]);
    const book = ref(undefined as unknown as Book);
    const isBookFound = ref(true);
    const route = useRoute()
    const availabilityClass = ref("");
    const buttonLabel = ref("");
    const librariesAvailable = [
      {
        "name": "CPNV D'Yverdon",
        "number": 4
      },
      {
        "name": "CPNV De Sainte-Croix",
        "number": 1
      },
      {
        "name": "CPNV De Payerne",
        "number": 0
      }
    ]
    BooksService.getBooks().then((allBooks) => {
      books.value = allBooks;
      const findBool = (allBooks.find((book) => book.title === route.params["id"])) as Book | undefined;
      isBookFound.value = findBool !== undefined;
      book.value = findBool as Book;
      availabilityClass.value = BooksService.getBookStatusColor(book.value!) + "-bg";
      if (book.value!.status == "Réservable") {
        availabilityClass.value = availabilityClass.value + " open-modal";
      }
      buttonLabel.value = BooksService.getBookStatusAction(book.value!);
    }).catch((error) => {
      console.log(error);
      isBookFound.value = false;
    });
    return {
      book,
      books,
      isBookFound,
      availabilityClass,
      buttonLabel,
      librariesAvailable
    }
  },
  methods:
      {
        buttonClick() {
          setTimeout(() => {
            BooksService.reserveBook(this.book);
            this.$router.push({ path: '/BookBorrowed' })
          }, 300);
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
        <button class="colored-button" data-modal-target=".my-modal" :class="availabilityClass">
          {{ buttonLabel }}
        </button>
      </div>
    </div>
    <div class="modal my-modal flat-border" tabindex="-1">
      <div class="modal-header">
        <h2>Réserver</h2>
        <button type="button" class="close-modal close-button" data-modal-target=".my-modal"
                aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3>Date de réservation</h3>
        <input type="date" id="start" name="trip-start"
               value="2021-07-22"
               min="2021-01-01" max="2021-12-31">
        <div class="spacing"></div>
        <h3>Bibliothèque</h3>
        <div class="libraries-selection">
          <div v-for="library in librariesAvailable">
            <selectable-button
                :label="library.name + ' (' + library.number+' '+((library.number > 1)?'exemplaires':'exemplaire')+')'"
                :value="library" :enabled="library.number>0"></selectable-button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="colored-button" class=" colored-button close-modal" data-modal-target=".my-modal" aria-label="Close"
                @click="buttonClick">
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
      <div class="genre" v-for="genre in book.genres">
        <checkable-tag :label="genre" :value="genre"></checkable-tag>
      </div>
    </div>
    <div class="spacing"></div>
    <h2>Livres similaires</h2>
    <div class="books-cover">
      <div class="book-result" v-for="book in books">
        <BookCover :book="book"></BookCover>
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

    .colored-button {
      margin-top: $spacing;
    }
  }
}

.genres {
  display: flex;
  flex-wrap: wrap;

  .genre {
    flex-grow: 1;

    button {
      width: calc(100% - 2 * $spacing-small);
      margin: $spacing-small 0;
    }
  }
}

.modal {
  top: 30%;

  .modal-header {
    padding: $spacing-separation;
  }

  .modal-body {
    padding: $spacing-separation;

    .libraries-selection {
      div {
        margin: $spacing 0;

        button {
          width: 100%;
          font-size: $interactable-text-size;
        }
      }
    }
  }

  .modal-footer {
    padding: $spacing-separation;
  }
}


#colored-button {
  width: 100%;
  background-color: $primary;
  border: none;
  border-radius: $corner-radius;
  padding: $spacing;
  color: $lightest;
  transition: all 0.3s;
  font-size: $button-text-size;

  &:hover {
    background-color: rgba($primary, 0.5);
  }
}
</style>