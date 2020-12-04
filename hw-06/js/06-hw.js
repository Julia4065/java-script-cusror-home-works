const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

getSubjects = (student) => {
    return Object.keys(student?.subjects).map((subject) => {
        return (subject[0].toUpperCase() + subject.slice(1)).replace("_", " ");
    });
};


getAverageMark = (student) => {
    const allMarks = [].concat(...Object.values(student.subjects));
    const totalSum = allMarks.reduce((total, mark) => {
        return total += mark;
    }, 0);

    const average = (totalSum / allMarks.length).toFixed(2);
    return average;
};


getStudentInfo = (student) => {

    const { name, course } = student;
    return {course, name, averageMark: getAverageMark(student)}
};


getStudentsNames = (students) => {

    const studentNames = students.map((student) => {
        return student.name;
    }).sort();

    return studentNames.sort();
}


getBestStudent = (students) => {

    const allStudentInfo = students.map((student) => getStudentInfo(student));
    const sortedStudents = allStudentInfo.sort((a, b) => b.averageMark - a.averageMark);
    return sortedStudents[0].name;

}

calculateWordLetters = (string) => {
    const letters = string.split("");
    const res = {};
    letters.map((letter) => {
        res[letter] = letters.filter((filteredLetter) => {
            return (letter === filteredLetter);
        }).length;
    });

    return res;
};


console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("тест"));