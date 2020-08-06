class Teacher{
    constructor(subject, age){
        this.sub = 'bangla';
        this.age = 21;
    }
}


class Student extends Teacher{
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
    }
}

const studentDetails = new Student('Jahan', 35);
console.log(studentDetails);