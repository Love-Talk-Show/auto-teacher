import { students } from '../../assets/student'
const uniqueClasses = new Set(students.map(item => item.class))
//获取班级[231,232]
const classNames = [...uniqueClasses]

// 获取班级学生成绩信息
function getStudents(className:Number) {
    return  students.filter(item => item.class === className)
                          .map(item => item);
}
// 获取班级学生名字['小明','小王','小红']
function getStudentNames(className:Number) {
    return  students.filter(item => item.class === className)
                          .map(item => item.name);
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

export{
    classNames,
    getStudents,
    getStudentNames,
    getScoresByName,
    ldStudent,
}
  
  