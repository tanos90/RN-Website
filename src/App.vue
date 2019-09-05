<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <transition name="top">
        <router-view />
      </transition>
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>
