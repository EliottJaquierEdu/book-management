<script lang="ts">
import Book from "../models/Book";
import {ref, toRefs} from 'vue'

export default {
  props: {
    book: (Object as () => Book)!
  },
  setup(props) {
    const date:Date = new Date();
    date.setDate(date.getDate() + 7);
    const month = date.toLocaleString('default', { month: 'long' });
    const dateString = date.getDate()+" "+month+" "+date.getFullYear();
    return {
      dateString,
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
          Réservé jusqu'au {{dateString}}
        </div>
        <button class="colored-button" data-modal-target=".my-modal" :class="availabilityClass" @click="buttonClick">
          <i class="fa-solid fa-qrcode"></i> Emprunter
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