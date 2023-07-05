let cipher = 'cipher';
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
alert(`
${codeWord1} ${codeWord2} ${codeWord3} ${codeWord4} ${codeWord5}
`);
let a = `юг`;
switch (a) {
  case `юг`:
    alert("на юг пойдешь счастье найдешь");
    break;
  case `север`:
    alert("на север пойдешь много денег найдешь");
    break;
  case `запад`:
    alert("на запад пойдешь верного друга найдешь");
    break;
    case `восток`:
    alert(" на восток пойдешь разработчиком станешь");
    break;
  default:
    alert("Нет таких значений");
};
// let str =  'пОлИнА нАбЕрЕжНаЯ';
// let position = str.indexOf(' ', str.indexOf(' ') + 1);
// console.log(position);
// let s = 'пОлИнА нАбЕрЕжНаЯ';
// s = s[0].toUpperCase () + s.substr ().toLowerCase ();
// let res = str.slice(0, 6);
//  res = str.slice(8);
//  я застряла


let start = prompt('Пожалуйста, введите число');
let end = prompt('Пожалуйста, введите конечное число');
while (start < end)
alert(start);
start++;

// let first = prompt('Пожалуйста, введите число');
// let second = prompt('Пожалуйста, введите конечное число');
// for 

// let first = prompt('Пожалуйста, введите число');
// for i in range(1, 11):
//    print(f'{first} * {i} = {first * i}')

// get_mult_table(9)  
let firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, FifthAnswer;

while (!firstAnswer || isNaN(firstAnswer)) {
    firstAnswer = +prompt("Пожалуйста, введите число:");
}

while (!secondAnswer || isNaN(secondAnswer)) {
    secondAnswer = +prompt("На сколько надо отнять от числа?");
}

while (!thirdAnswer || isNaN(thirdAnswer)) {
    thirdAnswer = +prompt("На сколько надо прибавить к числу?");
}
while (!fourthAnswer || isNaN(fourthAnswer)) {
    fourthAnswer = +prompt("На сколько надо умножить число?");
}
while (!FifthAnswer || isNaN(FifthAnswer)) {
    FifthAnswer = +prompt("Сколько разделить?");
}

let answer = ((firstAnswer - secondAnswer + thirdAnswer) * fourthAnswer) / FifthAnswer;

alert(
  `${firstAnswer} - ${secondAnswer} + ${thirdAnswer} * ${fourthAnswer} / ${FifthAnswer} = ${answer}`
);


let first;
let second = 8;

while (!startValue || isNaN(startValue)) {
  startValue = +prompt("Пожалуйста, введите число:");
}

for (let i = 
    //  я застряла 