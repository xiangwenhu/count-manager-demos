<template>
    <div>
      <div>
        <div>
          时钟因子：<input type="number" v-model="state.clockFactor" /> 
          <button @click="onSet">应用设置</button>
        </div>
        <div class="red">
          <div>时钟因子，即每次时钟执行的值变化的大小， 默认值等于时钟的interval。</div>
          <div>如果变化数值直大于等于step的值，会立即会调用订阅函数。</div>
          <div>如果变化的数值小于step的值，当多次累计变化的值大于等于step时，会调用订阅函数</div>
          <div class="red"><b>例如本示例，默认设置了5000, 即每次变化的值是 5000</b> </div>
        </div>
      </div>
  
      <CustomClock
        :key="`${countC.clockFactor}`"
        :options="{ start: 60 * 1000, notifyOnSubscribe: false, clockFactor: countC.clockFactor }"
      ></CustomClock>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, onMounted } from "vue";
  import CustomClock from "@/components/CustomClock.vue";
  
  const state = reactive<{
    clockFactor: number;
  }>({
    clockFactor: 5000,
  });
  
  const countC = reactive<{
    clockFactor: number;
  }>({
    clockFactor: 5000,
  });
  
  function onSet() {
    countC.clockFactor = state.clockFactor;
  }
  
  onMounted(() => {
    onSet();
  });
  </script>
  