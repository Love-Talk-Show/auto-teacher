<script setup lang="ts">
import { ref,onMounted } from "vue"
import { ldStudent } from './analysis'
import { getStudentNames,classNames } from "../../assets/student";
import * as echarts from 'echarts'
import { message } from 'ant-design-vue';

  const selectAllData = ref<any>([])
  const selectStudents = ref<any>([])
  const ld1 = ref()
  const ld2 = ref()
  const ld3 = ref()

  onMounted(()=>{
    // 准备学生搜索数据
    selectAllData.value = getStudentNames(classNames[0]).map(i=>({
      value:i,
      label:i
    }))
    // selectStudents.value = [selectAllData.value[0],selectAllData.value[1],selectAllData.value[2]]
  })
  function handleSelect() {
    if(selectStudents.value.length <= 3) {
      let option1 = ldStudent(selectStudents.value[0])
      let option2 = ldStudent(selectStudents.value[1])
      let option3 = ldStudent(selectStudents.value[2])
      echarts.init(ld1.value).setOption(option1)
      echarts.init(ld2.value).setOption(option2)
      echarts.init(ld3.value).setOption(option3)
    } else {
      selectStudents.value.length = 3
      message.warning('sorry，目前仅支持分析三位同学');
    }
  }


</script>

<template>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <a-select
        show-search
        placeholder="搜索学生对比分析"
        style="width: 500px;padding-top: 20px;padding-bottom: 60px;"
        mode="multiple"
        :options="selectAllData"
        v-model:value="selectStudents"
        @select="handleSelect"
      ></a-select>
    <div style="display: flex;flex-direction: row; justify-content: space-around;">
      <div ref="ld1" style="width: 250px;height: 220px;"></div>
      <div ref="ld2" style="width: 250px;height: 220px;"></div>
      <div ref="ld3" style="width: 250px;height: 220px;"></div>
    </div>
    
  </div>
    
</template>

<style scoped>
</style>
