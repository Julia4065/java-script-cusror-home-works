class Student {
    constructor(course, university, fullName, marks) {
        this.course = course;
        this.university = university;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismissed = false;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get getMarks() {
        return this.isDismissed ? null : this.marks;
    }

    set setMark(mark) {
        if (!this.isDismissed) {
            this.marks.push(mark);
        }
    }

    getAverageMark() {
        const totalMarksSum = this.marks.reduce((total, mark) => {
            return total += mark;
        }, 0);

        return totalMarksSum / this.marks.length;
    }

    dismiss() {
        this.isDismissed = true;
    }

    recover() {
        this.isDismissed = false;
    }
}


const ostap = new Student(1, "Вищої Школи Психотерапії м.Одеса", "Остап Бендер");
console.log(ostap.getInfo());

const valera = new Student(3, "Київский політехнічний університет", "Валера", [5, 4, 4, 5]);
console.log(valera.getMarks);

valera.setMark = 5;
console.log(valera.getMarks);

console.log(valera.getAverageMark());

valera.dismiss();
valera.setMark = 9;
console.log(valera.getMarks);

valera.recover();
console.log(valera.getMarks);

valera.setMark = 8;
console.log(valera.getMarks);


class BudgetStudent extends Student {
    constructor(course, university, fullName, marks) {
        super(course, university, fullName, marks);
        this.scholarship = 0;

        let interval = setInterval(this.getScholarship, 3000);
        setTimeout(function () {
            clearInterval(interval);
        }, 9000);
    }

    getScholarship = () => {
        if (this.getAverageMark() >= 4 && !this.isDismissed) {
            this.scholarship = 1400;
            console.log(`Ви отримали ${this.scholarship} грн. стипендії`);
        } else console.log("Студент не отримує стипендію через те, що середня оцінка менша за 4 або студент виключенний");
    }
}

const kolia = new BudgetStudent(2, "Львівський політехнічний університет", "Коля", [4, 5, 4, 5]);
kolia.getScholarship();
kolia.dismiss();
kolia.getScholarship();