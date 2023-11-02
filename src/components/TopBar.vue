<template>
  <div id="top-bar">
    <div @click="toggleHamMenu" :class="{ 'ham-menu__active': hamMenuOpen }">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div>
      <i class="fa-solid fa-search"></i>
      <i class="fa-solid fa-user"></i>
    </div>
  </div>
  <div class="ham-menu" :class="{ 'open': hamMenuOpen }">
    <div id="ham-menu__top-bar">
      <div>
        <i class="fa-solid fa-xmark" @click="closeHamMenu"></i>
      </div>
    </div>
    <div id="menu-nav">
      <subnav></subnav>
    </div>
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
}

.ham-menu {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  padding-left: 0.3rem;
  background: $lightest;
  transition: width 0.3s ease;
  display: none;
}

.ham-menu.open {
  width: 65%;
  height: 100%;
  display: block;
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
