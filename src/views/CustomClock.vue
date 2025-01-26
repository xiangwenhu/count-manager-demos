<template>
  <div>
    <div>
      <div>
        时钟间隔：<input type="number" v-model="state.interval" /> 步距：<input
          type="number"
          v-model="state.step"
        />
        <button @click="onSetClockInterval">应用设置</button>
      </div>
      <div class="red">
        <div>时间间隔是时钟运行的最小单位，也是首次计时的最大误差。</div>
        <div>步距是增长或者减少的单位，要比时钟间隔大。</div>
      </div>
    </div>

    <CustomClock
      :key="`${coutM.interval}-${coutM.step}`"
      :options="{ start: 60 * 1000, notifyOnSubscribe: false, step: coutM.step }"
      :clock-interval="coutM.interval"
    ></CustomClock>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import CustomClock from "@/components/CustomClock.vue";

const state = reactive<{
  interval: number;
  step: number;
}>({
  interval: 100,
  step: 200,
});

const coutM = reactive<{
  interval: number;
  step: number;
}>({
  interval: 500,
  step: 500,
});

function onSetClockInterval() {
  coutM.interval = state.interval;
  coutM.step = state.step;
}

onMounted(() => {
  onSetClockInterval();
});
</script>
