// CODE here for your Lambda Classes


class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} recieves a perfect score on ${subject}`;
    }
    adjGrade(student,studentGrade){
        var min = -20;
        var max = 20;
        var random = Math.floor(Math.random()* (+max - +min)) + +min; 
        var newGrade = studentGrade + random;
        student.grade = newGrade;
        return `${student.name}'s grade has been adjusted to ${newGrade}`;
    }
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade 
    }
    listsSubjects(subjects){
        for (let i =0; i < subjects.length; i++){
            console.log( subjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`; 
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentName, subject){
        return `${this.name} debugs ${studentName}'s code on ${subject}`;
    }
}

const mulder = new Instructor({
    name: 'Fox',
    location: 'Washington DC',
    age: 58,
    favLanguage: 'X++',
    specialty: 'Unexplained Phenomena',
    catchPhrase: 'The truth is out there',
})

const skully = new Instructor({
    name: 'Dana',
    location: 'Washington DC',
    age: 55,
    favLanguage: 'X++',
    specialty: 'Medicine',
    catchPhrase: 'This is absurd',
})

const manser = new ProjectManager({
    name: 'Phil',
    location: 'Grand Blanc',
    age: 37,
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: 'Hehehemmemem',
    gradClassName: 'WEB3',
    favInstructor: 'Fox',
})

const russell = new ProjectManager({
    name: 'Susie',
    location: 'Grand Blanc',
    age: 42,
    favLanguage: 'English',
    specialty: 'Back-end',
    catchPhrase: 'Shut it.',
    gradClassName: 'WEB1',
    favInstructor: 'Dana',
})

const me = new Student({
    name: 'Cody',
    location: 'Detroit',
    age: 29,
    previousBackground: 'Vehicle Prototyping',
    className: 'WEB25',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 96,
})

const smyth = new Student({
    name: 'Julie',
    location: 'Detroit',
    age: 29,
    previousBackground: 'Pewabic Pottery',
    className: 'WEB25',
    favSubjects: ['HTML', 'C#', 'Java'],
    grade: 100,
})


console.log(mulder.speak());
console.log(smyth.speak());
smyth.listsSubjects(smyth.favSubjects);
console.log(manser.debugsCode(me.name, me.favSubjects[2]));
console.log(russell.standup(smyth.className));
console.log(me.PRAssignment(me.favSubjects[1]));
console.log(smyth.sprintChallenge(smyth.favSubjects[1]));
console.log(mulder.grade(smyth.name,smyth.favSubjects[1]));
console.log(skully.demo(mulder.favLanguage));
console.log(manser.catchPhrase);
console.log(russell.catchPhrase);
console.log(russell.grade(me.name, mulder.favLanguage));
console.log(skully.catchPhrase);
console.log(skully.adjGrade(me,me.grade));