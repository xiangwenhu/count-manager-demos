<template>
  <div class="standard">
    <div>
      <div>
        <button @click="onStart" :disabled="!state.isOver">开始计数</button>
      </div>
      <div>值：{{ state.value }}</div>
    </div>

    <div style="max-height: 500px; overflow-y: auto">
      <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref ,onBeforeUnmount} from "vue";
import { CountManger, type SubScribeOptions,  } from "count-manger";

const props = defineProps<{options: SubScribeOptions, clockInterval?: number}>()

const time = ref<number>(Date.now());

const messages = ref<string[]>([]);

const state = reactive<{
  value: number | '';
  isOver: boolean;
}>({
  value:   props.options.start  != undefined ? ((props.options.start|| 0) / 1000) :  '',
  isOver: true,
});

const countManager = new CountManger({
  interval: props.clockInterval || 1000
})

const subScriber = countManager.subScribe(
  ({ value, isOver }) => {
    console.log("value:", value);
    state.isOver = isOver;
    state.value = value / 1000;

    const d = Date.now();

    const cost = d - time.value;

    time.value = d;
    messages.value.push(`执行时间${new Date(d).toJSON()}, 执行间隔: ${cost} ms`);
  },
  {
  ...props.options
  }
);

function onStart() {
  time.value = Date.now();
  subScriber.startListening();
}
onBeforeUnmount(() => {
  if(subScriber) subScriber.unSubscribe();
})
</script>

<style lang="scss" scoped>
.standard {
  font-size: 20px;
}
</style>
