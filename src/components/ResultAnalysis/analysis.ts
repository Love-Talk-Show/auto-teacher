import { students, getStudentNames } from "../../assets/student";
import { GradeConfig } from "../type"

// 获取班级学生成绩信息
function getStudents(className: Number) {
  return students.filter(item => item.class === className)
    .map(item => item);
}

// 获取某学生的成绩信息
function getScoresByName(studentName: String) {
  return students.find(item => item.name === studentName)
}

// 获取班级的某科目成绩信息:231班地理成绩 []
function getScoresByClass(className: Number) {
  let studentNames = getStudentNames(className)
  let temp = { zf: [], yw: [], sx: [], yy: [], zz: [], ls: [], dl: [] }
  for (let i = 0; i < studentNames.length; i++) {
    temp.zf.push(getScoresByName(studentNames[i]).zf)
    temp.yy.push(getScoresByName(studentNames[i]).yy)
    temp.sx.push(getScoresByName(studentNames[i]).sx)
    temp.yw.push(getScoresByName(studentNames[i]).yw)
    temp.zz.push(getScoresByName(studentNames[i]).zz)
    temp.ls.push(getScoresByName(studentNames[i]).ls)
    temp.dl.push(getScoresByName(studentNames[i]).dl)
  }
  return temp
}

// 获取某位学生的成绩雷达图
function ldStudent(studentName: String) {
  let scores: any = getScoresByName(studentName)
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
            value: [999 - scores.zfp, 999 - scores.dlp, 999 - scores.zzp
              , 999 - scores.lsp, 999 - scores.yyp, 999 - scores.sxp, 999 - scores.ywp],
            name: scores.name
          }
        ]
      }
    ]
  }
  return currentLDoption

}

// 获取班级的一本二本三本人数
function getGradeByClass(className: Number, oneGrade: Number, twoGrade: Number, subject: String) {
  return {
    'oneGrade': students.filter(item => item.class === className && item[subject] > oneGrade),
    'twoGrade': students.filter(item => item.class === className && item[subject] <= oneGrade && item[subject] > twoGrade),
    'threeGrade': students.filter(item => item.class === className && item[subject] <= twoGrade),
  };
}
// 获取班级的堆叠柱状图
function gradeEchartOption(gradeConfig: GradeConfig) {

  let tempData = {
    zf: getGradeByClass(gradeConfig.className, gradeConfig.zf.oneGrade, gradeConfig.zf.twoGrade, 'zf'),
    yw: getGradeByClass(gradeConfig.className, gradeConfig.yw.oneGrade, gradeConfig.yw.twoGrade, 'yw'),
    sx: getGradeByClass(gradeConfig.className, gradeConfig.sx.oneGrade, gradeConfig.sx.twoGrade, 'sx'),
    yy: getGradeByClass(gradeConfig.className, gradeConfig.yy.oneGrade, gradeConfig.yy.twoGrade, 'yy'),
    zz: getGradeByClass(gradeConfig.className, gradeConfig.zz.oneGrade, gradeConfig.zz.twoGrade, 'zz'),
    ls: getGradeByClass(gradeConfig.className, gradeConfig.ls.oneGrade, gradeConfig.ls.twoGrade, 'ls'),
    dl: getGradeByClass(gradeConfig.className, gradeConfig.dl.oneGrade, gradeConfig.dl.twoGrade, 'dl')
  }

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    title: {
      text: '各个科目本科过线人数',
      subtext: '一本-二本-三本'
    },
    // title: { text: '各个科目本科过线人数', textAlign: 'left' },
    legend: {},
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '0%',
      containLabel: true
    },
    color: [
      "#ee6666",
      "#fac858",
      "#91cc75",
    ],
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['语文', '数学', '英语', '历史', '政治', '地理', '总分']
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
        data: [tempData.yw.threeGrade.length, tempData.sx.threeGrade.length,
        tempData.yy.threeGrade.length, tempData.ls.threeGrade.length,
        tempData.zz.threeGrade.length, tempData.dl.threeGrade.length,
        tempData.zf.threeGrade.length]
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
        data: [tempData.yw.twoGrade.length, tempData.sx.twoGrade.length,
        tempData.yy.twoGrade.length, tempData.ls.twoGrade.length,
        tempData.zz.twoGrade.length, tempData.dl.twoGrade.length,
        tempData.zf.twoGrade.length]
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
        data: [tempData.yw.oneGrade.length, tempData.sx.oneGrade.length,
        tempData.yy.oneGrade.length, tempData.ls.oneGrade.length,
        tempData.zz.oneGrade.length, tempData.dl.oneGrade.length,
        tempData.zf.oneGrade.length]
      }
    ]
  };
}

function studentEchartOption(className: Number) {

  return {
    title: {
      text: '全班成绩对比',
      subtext: '最高分-平均分-最低分'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['总分', '地理', '政治', '历史', '语文', '数学', '英语'],
      selected: { '地理': false, '政治': false, '历史': false, '语文': false, '数学': false, '英语': false }
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: getStudentNames(className)
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '总分',
        type: 'bar',
        data: getScoresByClass(className).zf,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }, {
        name: '地理',
        type: 'bar',
        data: getScoresByClass(className).dl,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }, {
        name: '政治',
        type: 'bar',
        data: getScoresByClass(className).zz,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }, {
        name: '历史',
        type: 'bar',
        data: getScoresByClass(className).ls,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }, {
        name: '语文',
        type: 'bar',
        data: getScoresByClass(className).yw,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }, {
        name: '数学',
        type: 'bar',
        data: getScoresByClass(className).sx,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }, {
        name: '英语',
        type: 'bar',
        data: getScoresByClass(className).yy,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  };
}
export {
  getStudents,
  getScoresByName,
  ldStudent,
  getGradeByClass,
  gradeEchartOption,
  studentEchartOption
}

