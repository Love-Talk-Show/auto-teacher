<script setup lang="ts">
import { students } from '../../assets/student'
import { ref,onMounted } from "vue"
import * as echarts from 'echarts'
  const classNames = ref <Number[]>([])
  const currClass = ref<Number>(231)

  const oneGrade = ref(500)
  const twoGrade = ref(400)
  const threeGrade =ref(300)

  const circleEcharts = ref()

  onMounted(()=>{
    const uniqueClasses = new Set(students.map(item => item.class))
    classNames.value = [...uniqueClasses]
    currClass.value = classNames.value[0]
    getStudents()
    let myChart = echarts.init(circleEcharts.value)
    // myChart.setOption(circleOption)
  })
  const studentNames = ref<String[]>([])
  function getStudents() {
    studentNames.value = students.filter(item => item.class === currClass.value)
                          .map(item => item.name);
  }
</script>

<template>
    <a-radio-group v-model:value="currClass" @change="getStudents">
      <a-radio v-for=" item in classNames " :value="item" size="large">{{ item }} 班</a-radio>
      <a-tooltip title="一本分数线">
       <a-input-number v-model:value="oneGrade" :min="400" :max="600" size="small" style="width: 60px;margin-right: 15px;" ></a-input-number>
      </a-tooltip>
      <a-tooltip title="二本分数线">
       <a-input-number v-model:value="twoGrade" :min="300" :max="500" size="small" style="width: 60px;margin-right: 15px;" ></a-input-number>
      </a-tooltip>
    </a-radio-group>
    <div ref="circleEcharts" style="width: 800px;height: 300px;"></div>
</template>

<style scoped>
</style>
