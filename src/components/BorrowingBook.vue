<script lang="ts">
import Book from "../models/Book";
import {ref, toRefs} from 'vue'

function getBookStatusAvailabilityClass(days) {
  if(days < 0) return "red";
  if(days < 8) return "orange";
  return "green";
}

export default {
  props: {
    book: (Object as () => Book)!
  },
  setup(props) {
    const {book} = toRefs(props)
    const randomDays = Math.floor(Math.random() * 20)-7;
    const availabilityClass = ref(getBookStatusAvailabilityClass(randomDays));
    return {
      availabilityClass,
      randomDays
    }
  },
}
</script>

<template>
  <div class="book-list">
    <div class="img-container">
      <img class="flat-border" :src="book!.image" :alt="book!.title">
    </div>
    <div class="book-details">
      <div class="book-details-elements">
        <div class="book-title"><h3>{{ book!.title }}</h3></div>
        <div class="book-author">{{ book!.author }}</div>
        <div class="book-availability">
          <i class="fa-solid fa-circle" :class="availabilityClass"></i>
          <span v-if="randomDays < 0"> En retard de {{-randomDays}} {{randomDays==-1?'jour':'jours'}}</span>
          <span v-if="randomDays == 0"> A rendre aujourd'hui</span>
          <span v-if="randomDays > 0"> A rendre dans {{randomDays}} {{randomDays==1?'jour':'jours'}}</span>
        </div>
        <button class="colored-button" data-modal-target=".my-modal" :class="availabilityClass" @click="buttonClick">
          Rendre le livre
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.book-list {
  display: flex;
  margin: 10px 0;

  .img-container {
    flex: 0 0 $left-img-size;
    margin-right: $spacing-separation;
    img {
      width: 100%;
    }
  }

  .book-details {
    width: 100%;
    overflow: hidden;
    .book-details-elements {
      width: 100%;
      .book-title{
        padding: $spacing 0;
        width: 100%;
        h3 {
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
        margin-bottom: $spacing-separation;
      }
    }

    .colored-button {
      background: none;
      border: $corner-thickness solid $light-dark;
      color: $primary;
      font-size: $interactable-text-size;
      padding: 0;
    }
  }
}
</style>