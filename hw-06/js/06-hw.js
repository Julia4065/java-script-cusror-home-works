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


getStudentByName = (studentName) => {
    return students.find((student) => {
        return student.name === studentName;
    });
}


getSubjects = (studentName) => {
    const searchedStudent = getStudentByName(studentName);

    return Object.keys(searchedStudent?.subjects).map((subject) => {
        return (subject[0].toUpperCase() + subject.slice(1)).replace("_", " ");
    });
};


getAverageMark = (studentName) => {
    const searchedStudent = getStudentByName(studentName);
    const allMarks = [].concat(...Object.values(searchedStudent.subjects));
    const totalSum = allMarks.reduce((total, mark) => {
        return total += mark;
    }, 0);

    const average = (totalSum / allMarks.length).toFixed(2);
    return average;
};


getStudentInfo = (studentName) => {

    const searchedStudent = getStudentByName(studentName);

    return {
        course: searchedStudent.course,
        name: searchedStudent.name,
        averageMark: getAverageMark(studentName)
    }
};


getStudentsNames = (students) => {

    const studentNames = students.map((student) => {
        return student.name;
    }).sort();

    return studentNames.sort();
}


getBestStudent = (students) => {

    const studentNames = getStudentsNames(students);

    let bestStudentName;

    studentNames.reduce((averageMark, studentName) => {

        const currentAverageMark = getAverageMark(studentName);

        if (currentAverageMark > averageMark) {
            bestStudentName = studentName;
            return currentAverageMark;
        } else {
            return averageMark;
        }
    }, 0);

    return bestStudentName;
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


console.log(getSubjects("Tanya"));
console.log(getAverageMark("Tanya"));
console.log(getStudentInfo("Tanya"));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("тест"));