import { students } from "../../assets/student";
import { GradeConfig } from "../type.ts"

// 获取班级学生成绩信息
function getStudents(className:Number) {
    return  students.filter(item => item.class === className)
                          .map(item => item);
}

// 获取某学生的成绩信息
function getScoresByName(studentName:String) {
    return  students.find(item => item.name === studentName)
}

// 获取某位学生的成绩雷达图
function ldStudent(studentName:String) {
    let scores:any = getScoresByName(studentName)
    let currentLDoption =
            {
                title: {
                  text: scores.name
                },
                radar: {
                  // shape: 'circle',
                  indicator: [
                    { name: '总分排名', max: 1000 },
                    { name: '地理', max: 1000 },
                    { name: '政治', max: 1000 },
                    { name: '历史', max: 1000 },
                    { name: '英语', max: 1000 },
                    { name: '数学', max: 1000 },
                    { name: '语文', max: 1000 }
                  ]
                },
                series: [
                  {
                    name: scores.name,
                    type: 'radar',
                    data: [
                      {
                        value: [ 999 - scores.zfp, 999-scores.dlp, 999-scores.zzp
                        , 999-scores.lsp, 999-scores.yyp, 999-scores.sxp, 999-scores.ywp],
                        name: scores.name
                      }
                    ]
                  }
                ]
              }
    return currentLDoption

}

// 获取班级的一本二本三本人数
function getGradeByClass(className:Number,oneGrade:Number,twoGrade:Number,subject:String) {
  return {
    'oneGrade':students.filter(item => item.class === className && item[subject] > oneGrade),
    'twoGrade':students.filter(item => item.class === className && item[subject] <= oneGrade && item[subject] > twoGrade),
    'threeGrade':students.filter(item => item.class === className && item[subject] <= twoGrade),      
  };
}
// 获取班级的堆叠柱状图
function gradeEchartOption(gradeConfig:GradeConfig) {
  
  let tempData = {
    zf: getGradeByClass(gradeConfig.className,gradeConfig.zf.oneGrade,gradeConfig.zf.twoGrade,'zf'),
    yw: getGradeByClass(gradeConfig.className,gradeConfig.yw.oneGrade,gradeConfig.yw.twoGrade,'yw'),
    sx: getGradeByClass(gradeConfig.className,gradeConfig.sx.oneGrade,gradeConfig.sx.twoGrade,'sx'),
    yy: getGradeByClass(gradeConfig.className,gradeConfig.yy.oneGrade,gradeConfig.yy.twoGrade,'yy'),
    zz: getGradeByClass(gradeConfig.className,gradeConfig.zz.oneGrade,gradeConfig.zz.twoGrade,'zz'),
    ls: getGradeByClass(gradeConfig.className,gradeConfig.ls.oneGrade,gradeConfig.ls.twoGrade,'ls'),
    dl: getGradeByClass(gradeConfig.className,gradeConfig.dl.oneGrade,gradeConfig.dl.twoGrade,'dl')
  }

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' 
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: [ '语文', '数学', '英语', '历史', '政治', '地理','总分']
    },
    series: [
      {
        name: '三本',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [ tempData.yw.threeGrade.length, tempData.sx.threeGrade.length, 
                tempData.yy.threeGrade.length, tempData.ls.threeGrade.length,
                tempData.zz.threeGrade.length, tempData.dl.threeGrade.length,
                tempData.zf.threeGrade.length ]
      },
      {
        name: '二本',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [ tempData.yw.twoGrade.length, tempData.sx.twoGrade.length, 
          tempData.yy.twoGrade.length, tempData.ls.twoGrade.length,
          tempData.zz.twoGrade.length, tempData.dl.twoGrade.length,
          tempData.zf.twoGrade.length ]
      },
      {
        name: '一本',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [ tempData.yw.oneGrade.length, tempData.sx.oneGrade.length, 
          tempData.yy.oneGrade.length, tempData.ls.oneGrade.length,
          tempData.zz.oneGrade.length, tempData.dl.oneGrade.length,
          tempData.zf.oneGrade.length ]
      }
    ]
  }; 
}

export{
    getStudents,
    getScoresByName,
    ldStudent,
    getGradeByClass,
    gradeEchartOption
}
  
  