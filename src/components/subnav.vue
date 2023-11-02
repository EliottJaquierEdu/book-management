<template>
  <div id="subnav">
    <div id="subnav-title" @click="toggleSubnav('title')">
      <h3>Book</h3>
      <i class="fa-solid fa-chevron-right" :class="{ 'arrow__active': subnavOpen === 'title' }"></i>
    </div>
    <div class="subnav-content" :class="{ 'active': subnavOpen === 'title' }">
      <router-link :to="{ name: 'BookBorrowed', params:{} }">
        <div class="subnav-child" @click="toggleSubnav('search')">
          <a href="#/">Search</a>
          <i class="fa-solid fa-chevron-right" :class="{ 'arrow__active': subnavOpen === 'search' }"></i>
        </div>
      </router-link>
      <router-link :to="{ name: 'BookBorrowed' , params:{} }">
        <div class="subnav-child" @click="toggleSubnav('books')">
          <a href="#/">Books</a>
          <i class="fa-solid fa-chevron-right" :class="{ 'arrow__active': subnavOpen === 'books' }"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Book from "../models/Book";
import {ref, toRefs} from 'vue';

export default {
  name: "subnav",
  data() {
    return {
      subnavOpen: null
    };
  },
  methods: {
    toggleSubnav(elementId) {
      if (this.subnavOpen === elementId) {
        this.subnavOpen = null; // Cacher le sous-menu s'il est déjà ouvert
      } else {
        this.subnavOpen = elementId; // Ouvrir le sous-menu correspondant
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables";
#subnav {
  padding: 0.5rem 1rem;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  text-align: left;
}

/* Style the subnav content - positioned absolute */
.subnav-content {
  display: none;
  position: absolute;
  right: 0;
  width: 90%;
  z-index: 1;
  padding: 0.5rem 1rem;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  text-align: left;
  border-left: 1px solid $light;
}

.subnav-child {
  font-size: $small-text-size;
  color: $text-light;
}

.subnav-child > a {
  color: $text-light;
  width: 100%;
}

.subnav-content.active {
  display: block;
}

#subnav-title,
.subnav-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer; /* Ajoutez cette ligne pour indiquer que les éléments sont cliquables */
}

.arrow__active {
  transform: rotate(90deg);
}
</style>
