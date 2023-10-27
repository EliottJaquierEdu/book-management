<script setup lang="ts">
import {ref} from "vue";

defineProps<{ label: string, value: string, enabled: boolean }>()
const checked = ref(false)
</script>

<template>
  <button class="flat-border" :class="{checked: checked, disabled: !enabled}" @click="checked = !checked">
    <span>{{label}}</span>
  </button>
</template>

<style scoped lang="scss">
@import "src/assets/scss/variables";
button{
  padding: 0 $spacing;
  background-color: white;
  color: $dark;
  transition: all 0.3s;
  &.checked{
    border-color: $primary
  }
  &.disabled{
    color: $light;
    border-color: $lighter;
  }
  span{
    font-size: $interactable-text-size;
  }
}
</style>