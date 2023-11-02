<template>
  <div id="top-bar">
    <div id="burger" @click="toggleHamMenu" :class="{ 'ham-menu__active': hamMenuOpen }">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div>
      <router-link :to="{ name: 'SearchPage', params:{} }">
        <i class="fa-solid fa-search"></i>
      </router-link>
      <router-link :to="{ name: 'BookBorrowed', params:{} }">
        <i class="fa-solid fa-user"></i>
      </router-link>
    </div>
  </div>
  <div class="ham-menu" :class="{ 'open': hamMenuOpen }">
    <div id="ham-menu__top-bar">
      <div>
        <i class="fa-solid fa-xmark" @click="closeHamMenu"></i>
      </div>
    </div>
      <subnav :close-delegate="closeHamMenu"></subnav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Subnav from "./subnav.vue";

export default defineComponent({
  name: "TopBar",
  components: { Subnav },
  setup() {
    const hamMenuOpen = ref(false);

    const toggleHamMenu = () => {
      hamMenuOpen.value = !hamMenuOpen.value;
    };

    const closeHamMenu = () => {
      hamMenuOpen.value = false;
    };

    return { hamMenuOpen, toggleHamMenu, closeHamMenu };
  }
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

#top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  height: 3rem;
  border-bottom: 1px solid $light-dark;
  i {
    font-size: 1.5rem;
    margin: 0.5rem 0.5rem;
  }
  a{
    color: $text;
  }
  #burger{
    color: $text;
    cursor: pointer;
  }
}

.ham-menu {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 0.3rem;
  background: $lightest;
  height: 100%;
  width: 350px;
  max-width: 100%;
  display: block;
  transform: translate(-100%);
  transition: all 0.3s ease;
}

.ham-menu.open {
  transform: translate(0%);
}

#ham-menu__top-bar {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 0.5rem;
  height: 3rem;
  border-bottom: 1px solid $light-dark;
  i {
    font-size: 1.5rem;
    margin: 0.5rem 0.5rem;
  }
}

.ham-menu__active {
  width: 10%;
  height: 100%;
}
</style>
