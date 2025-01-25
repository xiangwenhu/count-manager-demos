<template>
  <Standard :options="{ start: 60 * 1000 }"></Standard>
</template>

<script setup lang="ts">
import Standard from "@/components/Standard.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
