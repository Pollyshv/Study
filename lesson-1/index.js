const surname = prompt("Введите фамилию");
const name = prompt("Введите имя");
const patronymic = prompt("Введите отчество");
const age = prompt("Введите возраст");
const gender = confirm("Ваш пол мужской?");
console.log("name",name);
console.log("surname",surname);
console.log("patronymic",patronymic);
console.log("age",age);
console.log("gender",gender);
const days = age*365;
const agein2028 = age+5;
if (gender===true){gender="мужской";} else{gender="женский;"}
alert(`
Ваше ФИО:${surname} ${name} ${patronymic}
Ваш возраст в годах:${age}
Ваш возраст в днях:${days}
Через пять лет Вам будет:${agein2028}
Ваш пол:${gender}
`);
 
