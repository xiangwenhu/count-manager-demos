<template>
  <div class="standard">
    <div>
      <div>
        <button @click="onStart" :disabled="!state.isOver">开始</button>
      </div>
      <div>值：{{ state.value }}</div>
    </div>

    <div style="max-height: 500px; overflow-y: auto" ref="refMsg">
      <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeUnmount, nextTick } from "vue";
import { counter, type SubScribeOptions, } from "clock-counter";

const refMsg = ref<HTMLDivElement>();

const props = defineProps<{ options: SubScribeOptions }>()

const time = ref<number>(performance.now());
const startTime = ref<number>(performance.now());

const messages = ref<string[]>([]);

const state = reactive<{
  value: number | '';
  isOver: boolean;
}>({
  value: props.options.start != undefined ? ((props.options.start || 0) / 1000) : '',
  isOver: true,
});

const subScriber = counter.subScribe(
  ({ value, isOver }) => {
    console.log("value:", value);
    state.isOver = isOver;
    state.value = value / 1000;

    const now = performance.now();

    const cost = now - time.value;

    time.value = now;

    const date = new Date();
    messages.value.push(`执行时间${date.toJSON()}, 执行间隔: ${Math.ceil(cost)} ms`);

    if (isOver) {
      messages.value.push(`总耗时：${date.toJSON()}, 执行间隔: ${Math.ceil(now - startTime.value)} ms`);
    }

    nextTick(() => {
      const div = refMsg.value;
      if (div) {
        div.scrollTop = div.scrollHeight;
      }
    })

  },
  {
    ...props.options
  }
);

function onStart() {
  const now = performance.now();
  time.value = now;
  startTime.value = now;
  subScriber.startListening();
}

onBeforeUnmount(() => {
  if (subScriber) subScriber.unSubscribe();
})
</script>

<style lang="scss" scoped>
.standard {
  font-size: 20px;
}
</style>
