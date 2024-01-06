<script setup lang="ts">
import { classNames } from '../../assets/student'
import { ref,onMounted, reactive } from "vue"
import * as echarts from 'echarts'
import { gradeEchartOption } from "./analysis";
import { GradeConfig } from "../type.ts"

const curGradeConfig = reactive<GradeConfig>({
  className: classNames[0],
  zf: { oneGrade: 420, twoGrade: 400 },
  yw: { oneGrade: 100, twoGrade: 80 },
  sx: { oneGrade: 100, twoGrade: 80 },
  yy: { oneGrade: 100, twoGrade: 80 },
  zz: { oneGrade: 70, twoGrade: 50 },
  ls: { oneGrade: 60, twoGrade: 40 },
  dl: { oneGrade: 70, twoGrade: 50 },
})
const showModal = ref(false)

const gradeEchart = ref()

let gradeChart
onMounted(() => {
  gradeChart = echarts.init(gradeEchart.value)
  gradeChart.setOption(gradeEchartOption(curGradeConfig.value))
})
const submitForm =()=>{
  showModal.value = false
  gradeChart.setOption(gradeEchartOption(curGradeConfig.value))
}

</script>

<template>
  <a-button type="primary" @click="showModal=true">分析配置</a-button>
  <a-modal
      v-model:open="showModal"
      title="分析配置表单"
      ok-text="确定"
      cancel-text="取消"
      @ok="submitForm"
    >
      <a-form ref="formRef" :model="curGradeConfig" layout="horizontal" name="form_in_modal">
        <a-form-item
          name="class"
          label="班级"
          :rules="[{ required: true, message: '请选择分析班级！' }]"
        >
        <a-radio-group v-model:value="curGradeConfig.className">
          <a-radio v-for=" item in classNames " :value="item" size="large">{{ item }} 班</a-radio>
        </a-radio-group>
        </a-form-item>

        <a-form-item name="zf" label="总分：">
          <a-tooltip title="一本分数线（总分）">一本分数线
            <a-input-number v-model:value="curGradeConfig.zf.oneGrade" 
              :min="400" :max="600" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（总分）">二本分数线
            <a-input-number v-model:value="curGradeConfig.zf.twoGrade" 
              :min="300" :max="500" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

        <a-form-item name="dl" label="地理：">
          <a-tooltip title="一本分数线（地理）">一本分数线
            <a-input-number v-model:value="curGradeConfig.dl.oneGrade" 
              :min="0" :max="100" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（地理）">二本分数线
            <a-input-number v-model:value="curGradeConfig.dl.twoGrade" 
              :min="0" :max="100" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

        <a-form-item name="ls" label="历史：">
          <a-tooltip title="一本分数线（历史）">一本分数线
            <a-input-number v-model:value="curGradeConfig.ls.oneGrade" 
              :min="0" :max="100" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（历史）">二本分数线
            <a-input-number v-model:value="curGradeConfig.ls.twoGrade" 
              :min="0" :max="100" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

        <a-form-item name="zz" label="政治：">
          <a-tooltip title="一本分数线（政治）">一本分数线
            <a-input-number v-model:value="curGradeConfig.zz.oneGrade" 
              :min="0" :max="100" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（政治）">二本分数线
            <a-input-number v-model:value="curGradeConfig.zz.twoGrade" 
              :min="0" :max="100" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

        <a-form-item name="yw" label="语文：">
          <a-tooltip title="一本分数线（语文）">一本分数线
            <a-input-number v-model:value="curGradeConfig.yw.oneGrade" 
              :min="0" :max="150" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（语文）">二本分数线
            <a-input-number v-model:value="curGradeConfig.yw.twoGrade" 
              :min="0" :max="150" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

        <a-form-item name="sx" label="数学：">
          <a-tooltip title="一本分数线（数学）">一本分数线
            <a-input-number v-model:value="curGradeConfig.sx.oneGrade" 
              :min="0" :max="150" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（数学）">二本分数线
            <a-input-number v-model:value="curGradeConfig.sx.twoGrade" 
              :min="0" :max="150" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

        <a-form-item name="yy" label="英语：">
          <a-tooltip title="一本分数线（英语）">一本分数线
            <a-input-number v-model:value="curGradeConfig.yy.oneGrade" 
              :min="0" :max="150" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
          <a-tooltip title="二本分数线（英语）">二本分数线
            <a-input-number v-model:value="curGradeConfig.yy.twoGrade" 
              :min="0" :max="150" 
              size="small" style="width: 60px;margin-right: 15px;" 
            ></a-input-number>
          </a-tooltip>
        </a-form-item>

      </a-form>
    </a-modal>
    <div ref="gradeEchart" style="width: 800px;height: 300px;"></div>
</template>

<style scoped>
</style>
