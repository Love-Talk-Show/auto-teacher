<script setup lang="ts">
import { ref,onMounted } from "vue"
import { studentEchartOption } from './analysis'
import * as echarts from 'echarts'
import { classNames } from "../../assets/student";

const classEchart = ref()

let classChart
onMounted(() => {
  classChart = echarts.init(classEchart.value)
  classChart.setOption(studentEchartOption(classNames[0]))
})


</script>

<template>
<div ref="classEchart" style="width: 100%;height: 45vh;"></div>
</template>

<style scoped>
</style>
