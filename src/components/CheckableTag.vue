<script setup lang="ts">
  import {ref} from "vue";

  defineProps<{ label: string, value: string }>()
  const checked = ref(false)
</script>

<template>
  <button class="flat-border" :class="{checked: checked}" @click="checked = !checked">
    <span>{{label}}</span>
  </button>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables";
button{
  padding: 0 $spacing;
  background-color: white;
  color: $dark;
  transition: all 0.3s;
  &.checked{
    background-color: $primary;
    border-color: $primary;
    color: #fff;
  }
  span{
    font-size: $interactable-text-size;
  }
}
</style>