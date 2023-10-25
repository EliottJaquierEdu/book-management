<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopBar"
})
</script>

<template>
<div id="top-bar">
  <div>
    <i class="fa-solid fa-bars"></i>
  </div>
  <div>
    <i class="fa-solid fa-search"></i>
    <i class="fa-solid fa-user"></i>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
#top-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  height: 3rem;
  border-bottom: 1px solid $light-dark;
  i{
    font-size: 1.5rem;
    margin: 0.5rem 0.5rem;
  }
}
</style>