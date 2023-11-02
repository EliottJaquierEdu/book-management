<script lang="ts">

export default {
  props: {
    closeDelegate: (Object as Function)!
  },
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
    },
    close(){
      this.closeDelegate();
    }
  }
};
</script>

<template>
  <div class="subnav">
    <router-link :to="{ name: 'SearchPage', params:{} }">
      <div class="subnav-title" @click="close">
          <h3>Accueil</h3>
          <i class="fa-solid fa-chevron-right"></i>
      </div>
    </router-link>
    <div class="subnav-title" @click="toggleSubnav('title')">
      <h3>Livres</h3>
      <i class="fa-solid fa-chevron-right" :class="{ 'arrow__active': subnavOpen === 'title' }"></i>
    </div>
    <div class="subnav-content" :class="{ 'active': subnavOpen === 'title' }">
      <router-link :to="{ name: 'SearchPage', params:{} }">
        <div class="subnav-child" @click="close">
          Recherche
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </router-link>
      <router-link :to="{ name: 'BookBorrowed' , params:{} }">
        <div class="subnav-child" @click="close">
          Mes livres
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.subnav {
  padding: $spacing-separation $content-margin;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  text-align: left;
  a{
    color: $text;
  }
}

.subnav-title{
  padding: 0.5rem;
  h3{
    font-size: $book-subtitle-size;
  }
}

.subnav-content {
  margin-left: 0.5rem;
  width: calc(100% - 10px);
  border-left: 1px solid $light;
  display:none;
}

.subnav-child {
  padding: $spacing-separation;
  font-size: $interactable-text-size;
  color: $text-light;
}

.subnav-child > a {
  color: $text-light;
  width: 100%;
}

.subnav-content.active {
  display: block;
}

.subnav-title,
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
