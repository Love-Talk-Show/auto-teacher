<script setup lang="ts">
import classAnalysis from './classAnalysis.vue'
import studentsLD from './studentsLD.vue'
</script>

<template>
  <a-card hoverable :bordered="false" style="width: 910px;height: 510px;">
    <a-tabs  type="card">
      <a-tab-pane key="1" tab="本科过线">
        <classAnalysis></classAnalysis>
      </a-tab-pane>
      <a-tab-pane key="2" tab="名列前茅">
      </a-tab-pane>
      <a-tab-pane key="3" tab="偏科雷达">
        <studentsLD/>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<style scoped>
</style>
