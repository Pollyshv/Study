const surname = prompt("Введите фамилию");
const name = prompt("Введите имя");
const patronymic = prompt("Введите отчество");
const age = prompt("Введите возраст");
const days = age*365;
const agein2028 = age+5;
const isMale = confirm("Ваш пол - мужской?");
let gender = null;
let pension = null;
if (isMale === true) {
      gender = "мужской";
    } else {
      gender = "женский";
    }
    if (isMale === true && age >= 65) {
  pension = "да";
} else if (isMale === false && age >= 55) {
  pension = "да";
} else {
  pension = "нет";
}
alert(`
Ваше ФИО:${surname} ${name} ${patronymic}
Ваш возраст в годах:${age}
Ваш возраст в днях:${days}
Через пять лет Вам будет:${agein2028}
Ваш пол:${gender}
Вы на пенсии: ${pension}
`); 
console.log("name",name);
console.log("surname",surname);
console.log("patronymic",patronymic);
console.log("age",age); 
 