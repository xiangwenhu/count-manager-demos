<template>
  <div style="display: flex; width: 100%">
    <div class="f-item">
      <Standard
        :options="{
          notifyOnSubscribe: false,
          key: 'key',
          autoUnsubscribe: false,
          start: 60 * 1000,
        }"
      ></Standard>
    </div>
    <div class="f-item">
      <button @click="state.displayAnother = true">添加第二个同key的计时</button>

      <Standard
        v-if="state.displayAnother"
        :options="{ notifyOnSubscribe: true, key: 'key', autoUnsubscribe: false }"
      ></Standard>
    </div>
  </div>
</template>

<script setup lang="ts">
import Standard from "@/components/Standard.vue";
import { reactive } from "vue";

const state = reactive<{ displayAnother: boolean }>({
  displayAnother: false,
});
</script>

<style>
.f-item {
  flex: 1;
}
</style>
