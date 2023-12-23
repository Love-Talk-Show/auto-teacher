<script setup lang="ts">
// import RandomName1 from './components/RandomName/RandomName1.vue';
// import RandomName2 from './components/RandomName/RandomName2.vue';
// import RandomName3 from './components/RandomName/RandomName3.vue';
import index from './components/index.vue';
</script>

<template>
  <a-watermark content="金子专属">
    <!-- <div class="main">  -->
      <index></index> 
      <!-- <RandomName1/> -->
      <!-- <RandomName2/> -->
      <!-- <RandomName3/> -->
    <!-- </div> -->
    
  </a-watermark>
</template>

<style scoped>
.main{
  display: flex;
  justify-content:space-around;
  user-select: none;
}
</style>
