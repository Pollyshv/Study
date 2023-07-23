class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  class Student extends Person {
    constructor(name, age, gender, major) {
      super(name, age, gender);
      this.major = major;
    }
  
    getDetails() {
      console.log(`Student name: ${this.name}
  Student age: ${this.age}
  Student gender ${this.gender}
  Student major: ${this.major}`);
    }
  }
  
  const student = new Student("Polina", 21, "Female", "JS");
  
  student.getDetails(); // задание 1



  class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, job) {
      super(name, salary);
      this.job = job;
    }
    getDetails() {
      console.log(`Manager name: ${this.name}
  Manager salary: ${this.salary}$
  Manager job: ${this.job}
  `);
    }
  }
  class Developer extends Employee {
    constructor(name, salary, lang) {
      super(name, salary);
      this.lang = lang;
    }
    getDetails() {
      console.log(`Developer name: ${this.name}
  Developer salary: ${this.salary}$
  Developer lang: ${this.lang}
  `);
    }
  }
  
  const manager = new Manager("Nikita", 2500, "Front End Teamlead");
  const developer = new Developer("Vasya", 3000, "C++");
  
  manager.getDetails();
  developer.getDetails();

