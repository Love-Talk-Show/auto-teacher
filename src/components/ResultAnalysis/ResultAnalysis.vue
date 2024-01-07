<script setup lang="ts">
import gradeAnalysis from './gradeAnalysis.vue'
import studentsLD from './studentsLD.vue'
import classAnalysis from './classAnalysis.vue'
</script>

<template>
  <a-card hoverable :bordered="false" style="width: 910px;height: 510px;">
    <a-tabs  type="card">
      <a-tab-pane key="1" tab="本科过线">
        <gradeAnalysis/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="名列前茅">
        <classAnalysis/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="偏科雷达">
        <studentsLD/>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<style scoped>
</style>
