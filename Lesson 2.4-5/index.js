const object = {
    id: 3,
    Name: "Laptop",
    Company: "Samsung",
    Count: 12,
    Price: 5400,
    totalAmount: 64800, //висячая запятая-упрощает добавление, 
                    //удаление и перемещение свойств,
                    //так как все строки объекта становятся одинаковыми.
  };
  
  for (let key in object) {
    console.log("key =", key);
    console.log("keyValue =", object[key], "\n");
  };  // задание 1 и 2




  let developer1 = {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Javascript",
    getLocation: function (object) {
      console.log("Location =", object.country + object.continent);
    },
  };
  let developer2 = {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 23,
    language: "Python",
    getLocation: function (object) {
      console.log("Location =", object.country + object.continent);
    },
  };
  
  developer1.getLocation(developer1);
  developer2.getLocation(developer2);// задание 3




  const fruits = ["Peach", "Pineapple", "Banana", "Kiwi"];

  for (let i = 1; i <= fruits.length; i += 2) {
    console.log(fruits[i]);
  }
  
  console.log(fruits.length);
  
  fruits.push("Apple");
  console.log(fruits);
  
  fruits.splice(2, 1, "Nectarine"); // присваивание значения свойству
  console.log(fruits); // задание 4




  const numbers = [27, -3, 92, 0, -17, -2, 108];
const positiveNumbers = [];
const negativeNumbers = [];
const zeroNumbers = []; 
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveNumbers.push(numbers[i]);
  } else if (numbers[i] < 0) {
    negativeNumbers.push(numbers[i]);
  } else if (numbers[i] === 0) {
    zeroNumbers.push(numbers[i]);
  }
}
console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);
console.log("Zero Numbers:", zeroNumbers);// не разобралась c for of
// задание 5



const calcSumArr = (sumArr, summa) => {
    for (let i = 0; i < sumArr.length; i++) {
      summa += sumArr[i];
    }
    console.log("Summa =", summa);
  };
  const init = () => {
    const sumArr = [1, 2, 3, 4];
    let summa = 0;
  
    calcSumArr(sumArr, summa);
  };
  
  init(); // задание 6


  

  const users = [
    { name: "Alex", age: 31 },
    { name: "Olga", age: 17 },
    { name: "Carl", age: 15 },
    { name: "Nancy", age: 28 },
    { name: "Eric", age: 9 },
  ];
  
  const youngUsers = [];
  
  for (let dates of users) {
    if (dates.age < 18) {
      youngUsers.push(dates);
    }
  }
  
  console.log(youngUsers); // задание 7


  function palindrome(str) {
    let check = '';
    for (let i = str.length; i > 0; --i) {
      check += str[i];
    }
    if (str == check) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindrome('Полина'));
  console.log(palindrome('Математика'));
  console.log(palindrome('каша'));
  console.log(palindrome(''));
  // задание 8 



  const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
  };
  
  const numbers = [1, 2, 3, 4];
  console.log(getAverage(numbers));
  const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 45, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
  ]; 
  // задание 9 не было мной понято



  const mixed = [-14, 24, -89, 43, 0, -1, 412, 4];
const positive = [];
const negative = [];

for (let i = 0; i <= mixed.length; i++) {
  if (mixed[i] >= 0) {
    positiveNumbers.push(mixed[i]);
  } else if (mixed[i] < 0) {
    negativeNumbers.push(mixed[i]);
  }
}
console.log("Positive:", positiveNumbers);
console.log("Negative:", negativeNumbers);
// задание 10




