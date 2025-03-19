<script setup lang="ts"></script>

<template>
  <div class="container">
    <ul class="menus">
      <li><RouterLink to="/">标准倒计时</RouterLink></li>
      <li><RouterLink to="/sameKey">同一个key计时</RouterLink></li>
      <li><RouterLink to="/increase">增长计数</RouterLink></li>
      <li><RouterLink to="/customClock">自定义时钟周期</RouterLink></li>
      <li><RouterLink to="/clockFactor">自定义时钟因子</RouterLink></li>
    </ul>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 16px;
  font-size: 16px;
}

.menus {
  flex: 0 0 200px;
}
</style>
