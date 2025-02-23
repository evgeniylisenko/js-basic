function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.courses = [];

    this.addCourse = (course) => {
        let receivedCourse = this.courses.find(c => c.course === course);

        if (!receivedCourse) {
            receivedCourse = { course, grades: [], attendance: [] };
            this.courses.push(receivedCourse);
        }

        return receivedCourse;
    };

    this.addGrade = (course, grade) => {
        this.addCourse(course).grades.push(grade);
    };


    this.addAttendance = (course, attended) => {
        this.addCourse(course).attendance.push(attended);
    };

    this.getAverage = (arr) => {
        return arr.length > 0 ? arr.reduce((acc, el) => acc + el, 0) / arr.length : 0;
    };


    this.getCourseInfo = (course) => {
        const receivedCourse = this.courses.find(c => c.course === course);

        if (receivedCourse) {
            return {
                course: receivedCourse.course,
                averageGrade: this.getAverage(receivedCourse.grades),
                averageAttendance: this.getAverage(receivedCourse.attendance),
                completedClasses: receivedCourse.attendance.length
            };
        }

        return null;
    };

    this.getStudentInfo = () => {
       return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthYear: this.birthYear,
            courses: this.courses.map(course => this.getCourseInfo(course.course))
       }
    };
}
function Group() {
    this.students = [];

    this.addStudent = (student) => {
        this.students.push(student);
    };

    this.removeStudent = (student) => {
        const index = this.students.indexOf(student);

        if (index !== -1) {
            this.students.splice(index, 1);
        }

    };

    this.getSuccessRating = () => {
        return this.students
            .map(student => ({
                student,
                averageGrade: student.courses.reduce((acc, course) => acc + student.getCourseInfo(course.course).averageGrade, 0) / student.courses.length
            }))
            .sort((a, b) => b.averageGrade - a.averageGrade);
    };

    this.getAttendanceRating = () => {
        return this.students
            .map(student => ({
                student,
                averageAttendance: student.courses.reduce((acc, course) => acc + student.getCourseInfo(course.course).averageAttendance, 0) / student.courses.length
            }))
            .sort((a, b) => b.averageAttendance - a.averageAttendance);
    };

}

const student1 = new Student("Євгеній", "Лисенко", 1997);
const student2 = new Student("Іван", "Сідорчук", 2002);
const student3 = new Student("Марія", "Коваль", 1995);

student1.addCourse(3);
student1.addGrade(3, 4);
student1.addAttendance(3, 1);
student1.addCourse(4);
student1.addGrade(4, 3);
student1.addAttendance(4, 1);

student2.addCourse(5);
student2.addGrade(5, 2);
student2.addAttendance(5, 1);

student3.addCourse(3);
student3.addGrade(3, 5);
student3.addAttendance(3, 1);
student3.addCourse(4);
student3.addGrade(4, 4);
student3.addAttendance(4, 1);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

console.log("Рейтинг за успішністю:");
console.log(group.getSuccessRating().map(item => `${item.student.firstName} ${item.student.lastName}: ${item.averageGrade.toFixed(2)}`));

console.log("Рейтинг за відвідуваністю:");
console.log(group.getAttendanceRating().map(item => `${item.student.firstName} ${item.student.lastName}: ${item.averageAttendance.toFixed(2)}`));

group.removeStudent(student2);
console.log("Після видалення студента:");
console.log(group.getSuccessRating().map(item => `${item.student.firstName} ${item.student.lastName}: ${item.averageGrade.toFixed(2)}`));
