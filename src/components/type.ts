// 各个科目一本二本分数线数据格式
export interface GradeConfig {
    className: Number;
    zf: { oneGrade: Number, twoGrade: Number };
    yw: { oneGrade: Number, twoGrade: Number };
    sx: { oneGrade: Number, twoGrade: Number };
    yy: { oneGrade: Number, twoGrade: Number };
    zz: { oneGrade: Number, twoGrade: Number };
    ls: { oneGrade: Number, twoGrade: Number };
    dl: { oneGrade: Number, twoGrade: Number };
}