<script setup lang="ts"></script>

<template>
  <div class="container">
    <ul class="menus">
      <li><RouterLink to="/">标准倒计时</RouterLink></li>
      <li><RouterLink to="/about">同一个key计时</RouterLink></li>
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
