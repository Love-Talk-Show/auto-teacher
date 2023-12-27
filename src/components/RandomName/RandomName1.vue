<script setup lang="ts">
import { students } from '../../assets/student'
import { ref,onMounted } from "vue"
  const classNames = ref <Number[]>([])
  const currClass = ref<Number>(231)
  const luckyName = ref<String>('点名器')

  onMounted(()=>{
    const uniqueClasses = new Set(students.map(item => item.class));
    classNames.value = [...uniqueClasses];
    currClass.value = classNames.value[0]
    getStudents()
  })
  const studentNames = ref<String[]>([])
  function getStudents() {
    studentNames.value = students.filter(item => item.class === currClass.value)
                          .map(item => item.name);
  }
  let timer = 0
  function startTime() {
    endTime()
    timer = setInterval(() => {
      let len = studentNames.value.length
      let id = Math.floor(Math.random() * len - 1)
      luckyName.value = studentNames.value[id]
    }, 90)
  }
  function endTime() {
    clearInterval(timer)
  }
</script>

<template>
  <a-card hoverable :bordered="false" style="width: 910px;height: 510px;padding-top: 8%;">
    <a-radio-group v-model:value="currClass" @change="getStudents">
      <a-radio v-for=" item in classNames " :value="item" size="large">{{ item }} 班</a-radio>
    </a-radio-group>
    <div style="font-weight: 900;font-size: 100px;letter-spacing:50px;">
      {{ luckyName }}
    </div>
    <a-button style="margin: 15px;" size="large" @click="startTime">开始</a-button>
    <a-button style="margin: 15px;" size="large" danger @click="endTime()">停止</a-button>
    <a-card-meta  title="随机点名" description="简洁文字版" style="padding-top: 20px;">
    </a-card-meta>
  </a-card>
</template>

<style scoped>
</style>
