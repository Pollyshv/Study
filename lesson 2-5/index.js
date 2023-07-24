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

      

  // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

  // Considering these factors, write a function that tells you if it is possible to get to the pump or not.
  
  // Function should return true if it is possible and false if not.


  const drivingUntilEnd = (gallonsLeft, milePerGallone, wholeMiles) => {
    let fuelConsumption = milePerGallone * gallonsLeft;
    if (wholeMiles <= fuelConsumption) {
      return true;
    } else {
      return false;
    }
  };
  
  const init = () => {
    const gallonsLeft = 2;
    const wholeMiles = 50;
    const milePerGallone = 25;
  
    const canYoudrive = drivingUntilEnd(gallonsLeft, milePerGallone, wholeMiles);
    console.log(`Can you arrive to petrol station: ${canYoudrive}`)
  };
  
  init();



  // Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

  // The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.
  
  // What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:
  
  // 10 - 99.99... ---> Round to number divisible by 5
  
  // 100 - 999.99... ---> Round to number divisible by 50
  
  // 1000 - 9999.99... ---> Round to number divisible by 500
  
  // And so on...
  
  // Good luck!

  print "What was the value of the bill?"
bill = input()
print "How was the service?"
service = input()
if service == "good":
    percentage = 0.20
else:
    percentage = 0.15
tip = bill * percentage
print tip




// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).


const result = num =>{
  let multiple = 0;
  for(let i = 0; i<num;i++){
    
    if(i%3==0 || i %5==0){
      multiple += i;  
    }
  }
  return multiple;
}
console.log(result(10));


// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const deleteFirstLast = (word) => {
  const newWord = word.slice(1, -1);
  console.log(`New Word: ${newWord}`);
};
const init = () => {
  const word = "?Hello?";
  deleteFirstLast(word);
};

init();



// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function checkPalindrome(word) {    
  var l = word.length;
  for (var i = 0; i < l / 2; i++) {
      if (word.charAt(i) !== word.charAt(l - 1 - i)) {
          return false;
      }
  }
  return true;
}

if (checkPalindrome("Apollinaria")) {
  document.write("The word is a palindrome");
} else {
  document.write("The word is NOT a palindrome");


  