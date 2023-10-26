<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <TopBar></TopBar>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>