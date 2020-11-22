const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const studentGirls = ["Олена", "Іра", "Світлана"];
const studentsBoys = ["Олександр", "Ігор", "Олексій"];

divideStudents = (students) => {
    const groupedStudents = [];

    for (let i = 0; i < students.length / 2; i++) {
        groupedStudents[i] = [studentGirls[i], studentsBoys[i]];
    }
    return groupedStudents;
}

addDelimiterToGroups = (students, delimiter) => {
    const studentGroups = divideStudents(students);
    const groupsWithDelimiter = [];

    for (let i = 0; i < studentGroups.length; i++) {
        groupsWithDelimiter.push(studentGroups[i].join(` ${delimiter} `));
    }

    return groupsWithDelimiter;
}

assignProjectToStudentsGroup = (students, themes) => {
    const studentGroups = addDelimiterToGroups(students, "і");
    const groupWithProject = [];

    for (let i = 0; i < studentGroups.length; i++) {
        groupWithProject[i] = [studentGroups[i], themes[i]];
    }

    return groupWithProject;
}

assignMarkToStudent = (students, marks) => {
    const studetsWithMarks = [];
    for (let i = 0; i < students.length; i++) {
        studetsWithMarks[i] = [students[i], marks[i]];
    }
    return studetsWithMarks;
}

setMarkToStudentsWithThemes = (students) => {
    const groupssWithThemes = assignProjectToStudentsGroup(students, themes);
    const groupsWithThemeAndMark = [];
    for (const groupWithTheme of groupssWithThemes) {
        groupsWithThemeAndMark.push(groupWithTheme, Math.floor(Math.random() * 5 + 1));
    }

    return groupsWithThemeAndMark;
}

console.log(`Students divided by groups of two: ${divideStudents(students)}`);
console.log(`Students with assigned themes: ${assignProjectToStudentsGroup(students, themes)}`)
console.log(`Students with assigned marks: ${assignMarkToStudent(students, marks)}`);
console.log(`Group of students with assigned themes and marks: ${setMarkToStudentsWithThemes(students)}`);