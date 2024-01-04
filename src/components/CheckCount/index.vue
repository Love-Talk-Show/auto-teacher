<script setup lang="ts">
import { students } from '../../assets/student'
import { ref,onMounted, computed  } from "vue";
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

  function getStudents() {
    studentNames.value = students.filter(item => item.class === currClass.value)
                          .map((item) => ({ name:item.name, color:randomColor({}),isdone:false}));
  }

  const countIsdone = computed(()=>{
    return studentNames.value.filter((item)=>item.isdone).length
  })
</script>

<template>
  <a-card hoverable :bordered="false" style="width: 910px;height: 510px;padding-top: 2%;">
    <a-radio-group v-model:value="currClass" @change="getStudents">
      <a-radio v-for=" item in classNames " :value="item" size="large">{{ item }} 班</a-radio>
    </a-radio-group>
    <div>
      <a-badge v-for="item in studentNames" :offset="[-10,10]">
        <template #count >
          <div v-show="item.isdone">
            <svg t="1704284926089" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8584" width="24" height="24"><path d="M0.853333 512a511.146667 511.146667 0 0 0 1022.293334 0A511.146667 511.146667 0 0 0 0.853333 512z" fill="#FBE945" p-id="8585"></path><path d="M119.893333 512a392.106667 392.106667 0 1 0 784.213334 0 392.106667 392.106667 0 1 0-784.213334 0z" fill="#FBB11B" p-id="8586"></path><path d="M904.106667 512c0-84.053333-27.989333-168.106667-77.056-231.082667-62.976-48.981333-147.029333-76.970667-230.997334-76.970666A391.424 391.424 0 0 0 203.946667 596.053333c0 83.968 27.989333 168.021333 76.970666 230.997334 63.061333 49.066667 147.029333 77.056 231.082667 77.056A391.424 391.424 0 0 0 904.106667 512z" fill="#FDC72F" p-id="8587"></path><path d="M553.984 287.914667l84.053333 168.106666 182.016 34.986667-126.037333 139.946667 20.992 189.098666-161.024-83.968-168.021333 83.968 27.989333-189.013333-126.037333-140.032 175.104-34.986667 90.965333-168.106666" fill="#FBB11B" p-id="8588"></path><path d="M512 245.930667l91.050667 168.106666 174.933333 34.986667-125.952 139.946667 20.992 189.098666L512 694.016l-161.024 84.053333 20.992-189.013333-126.037333-140.032 175.018666-34.986667L512 245.845333" fill="#FBE945" p-id="8589"></path></svg>
          </div>
           </template>
        <a-button 
          :style="{
            'border-color':item.isdone ?'#fdc72f':'',
            'color':item.isdone ?'#D4AF37':'',
            'font-weight':item.isdone ?'bold':'',
            'font-size':item.isdone?'15px':'',
            'text-shadow': item.isdone ?'0 0 20px #D4AF37':'',
            'margin':'5px'}"
          @click="item.isdone = !item.isdone"
          >{{ item.name }}
          </a-button>
      </a-badge>
    </div>
    <a-statistic
      title="完成人数/总人数"
      :value="countIsdone"
      :precision="0"
      :value-style="{ color: '#3f8600' }"
      style="margin-top: 50px;font-weight: 1000;"
    >
    <template #suffix>
      <span style="color: black;font-size:18px;font-weight: 500;">/ {{ studentNames.length }}</span>
    </template>
    </a-statistic>
  </a-card>
</template>

<style scoped>
</style>