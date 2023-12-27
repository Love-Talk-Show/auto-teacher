<script setup lang="ts">
import { students } from '../../assets/student'
import { ref,onMounted } from "vue";
import randomColor from 'randomcolor'

  const classNames = ref <Number[]>([])
  const currClass = ref<Number>(231)

  onMounted(()=>{
    const uniqueClasses = new Set(students.map(item => item.class));
    classNames.value = [...uniqueClasses];
    currClass.value = classNames.value[0]
    getStudents()
  })
  const studentNames = ref<String[]>([])
  const colors = ref<String[]>([])
  function getStudents() {
    studentNames.value = students.filter(item => item.class === currClass.value)
                          .map(item => item.name);
    colors.value= randomColor({
      count: studentNames.value.length,
    })
  }
</script>

<template>
  <a-card hoverable :bordered="false" style="width: 910px;height: 510px;padding-top: 8%;">
    <a-radio-group v-model:value="currClass" @change="getStudents">
      <a-radio v-for=" item in classNames " :value="item" size="large">{{ item }} 班</a-radio>
    </a-radio-group>
    <div>
      <a-button  type="dashed" v-for="(item,index) in studentNames" 
      :style="{'border-color':colors[index],'margin':'5px'}"  
      >{{ item }}</a-button>
    </div>
    <a-card-meta  title="学生档案" :description="currClass + '班共有'+ studentNames.length+'人'" style="padding-top: 20px;">
    </a-card-meta>
  </a-card>
</template>

<style scoped>
</style>
