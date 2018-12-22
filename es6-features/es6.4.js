const students = [
    { name: 'Francis', grade: 6},
    { name: 'Martin', grade: 6},
    { name: 'Martha', grade: 7}
];

let allStudentPassedCourse = students.every((student) => {
    return student.grade >= 6
})

console.log(allStudentPassedCourse);
