function student(name, surname, birthYear, initialMarks = []) {
    let _marks = [];

    if (Array.isArray(initialMarks)) {
        _marks = initialMarks.filter(mark => typeof mark === "number" && mark >= 0 && mark <= 100);
    }

    this.attendance = new Array(25).fill(null);

    Object.defineProperty(this, "name", {
        value: name,
        writable: false,
        enumerable: true
    });

    Object.defineProperty(this, "surname", {
        value: surname,
        writable: false,
        enumerable: true
    });

    Object.defineProperty(this, "birthYear", {
        value: birthYear,
        writable: false,
        enumerable: true
    });

    Object.defineProperty(this, "marks", {
        get() {
            return _marks;
        },
        set(value) {
            if (typeof value === "number" && value >= 0 && value <= 100) {
                _marks.push(value);
            } else {
                console.log("Оцінка має бути числом від 0 до 100");
            }
        },
        enumerable: true
    })
}

student.prototype.status = function () {
    console.log(`${this.name} ${this.surname}, народився ${this.birthYear}, оцінки: ${this.marks.join(", ")}`);
}

student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

student.prototype.getAverageMark = function () {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
};

student.prototype.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    } else {
        console.log("Відвідуваність уже повністю заповнена!");
    }
};

student.prototype.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    } else {
        console.log("Відвідуваність уже повністю заповнена!");
    }
};

student.prototype.summary = function () {
    const averageMark = this.marks.length
        ? this.marks.reduce((a, b) => a + b, 0) / this.marks.length
        : 0;

    let lessons = 0;
    let visits = 0;

    this.attendance.forEach((day) => {
        if (day !== null) {
            lessons++;
        }
        if (day === true) {
            visits++;
        }
    });

    const averageAttendance = visits / lessons;

    if (averageAttendance > 0.9 && averageMark > 90) {
        console.log("Молодець!");
    } else if (averageAttendance > 0.9 || averageMark > 90) {
        console.log("Можна краще!");
    } else {
        console.log("Редиска!");
    }

}

const ivan = new student("Іван", "Солоха", 2002, [100, 90, 70]);
ivan.present();
ivan.present();
ivan.present();
ivan.absent();
ivan.absent();

ivan.status();
console.log(ivan.getAge());
console.log(ivan.getAverageMark());
ivan.summary();

const nurik = new student("Нурік", "Нічогособі", 2006, [100, 100, 100, 100, 100]);
nurik.present();
nurik.present();
nurik.present();
nurik.present();
nurik.present();


nurik.status();
console.log(nurik.getAge());
console.log(nurik.getAverageMark());
nurik.summary();