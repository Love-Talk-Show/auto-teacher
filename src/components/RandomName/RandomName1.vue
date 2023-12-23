<script setup lang="ts">
import name from './name.json'
import { ref } from "vue";
  const studentList = name
  const luckyName = ref('点名器')

  let timer = 0
  function startTime() {
    endTime()
    timer = setInterval(() => {
      let len = studentList.length
      let id = Math.floor(Math.random() * len - 1)
      luckyName.value = studentList[id].name
    }, 90)
  }
  function endTime() {
    clearInterval(timer)
  }
  const cardStyle = ref("width: 250px;height: 230px;margin: 20px;")
  function open() {
    cardStyle.value = 'width: 100%;height: 100%;margin: 20px;'
  }
</script>

<template>
  <a-card hoverable :bordered="false" :style="cardStyle">
    <h1>{{ luckyName }}</h1>
    <a-button style="margin: 5px;" @click="startTime">开始</a-button>
    <a-button style="margin: 5px;" @click="endTime">停止</a-button>
    <a-card-meta  title="随机点名" description="简洁文字版" style="padding-top: 20px;">
      <template #avatar>
        <a-tooltip title="双击变大" color="orange">
          <div @click="open">
            <svg t="1703312028915" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3917" width="64" height="64"><path d="M296 790c27.738 61.785 32.793 109.621 34 144h326c-0.191-100.09-21.855-225.266-74-273s-313.738 67.215-286 129z" fill="#FFE6D3" p-id="3918"></path><path d="M550.1 456l5.885 0.124s14.392 25.831 10.829 50.35C563.335 530.385 541.9 553 541.9 553l-5.885-0.124s20.5-23.056 24-47.193C563.553 481.383 550.1 456 550.1 456z" fill="#3A327C" p-id="3919"></path><path d="M328.5 667c34.518 0 46.5 28.878 46.5 64.5S363.018 796 328.5 796s-64.832-17.393-62.5-64.5c1.761-35.579 27.982-64.5 62.5-64.5z" fill="#FFC999" p-id="3920"></path><path d="M404.5 619c34.518 0 46.5 28.878 46.5 64.5S439.018 748 404.5 748s-64.832-17.393-62.5-64.5c1.761-35.579 27.982-64.5 62.5-64.5z" fill="#FFD3AB" p-id="3921"></path><path d="M445.129 554.991c33.509-14.972 56.2 4.1 78.871 44.009s28.339 73.248 2.213 99.506-60.137 29.833-88.347-24.713c-21.306-41.193-24.879-104.441 7.263-118.802z" fill="#FFDEC0" p-id="3922"></path><path d="M434 770c15.285-137.891 76.828-183.562 113-187 99.265-9.433 6.32 100.637 36 124 89.548 69.311-163.755 168.206-149 63z" fill="#FFE6D3" p-id="3923"></path><path d="M543.811 421.261c-6.251 11.913-2.607 9.79-15.938 9.256-383-4.064-249.2-278.573-109.809-208.507C426.586 65.5 732.022 86.7 543.811 421.261z" fill="#F3645C" p-id="3924"></path></svg>
          </div>
        </a-tooltip>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
</style>
