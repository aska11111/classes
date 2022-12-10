import { Exam } from "./classes/Exam.js";

let results = [
  new Exam("Иван", "Петров", 2, 4, 4),
  new Exam("Настя", "Сидорова", 5, 4, 4),
  new Exam("Юля", "Иванникова", 3, 4, 4),
  new Exam("Петр", "Петров", 5, 5, 5),
];

console.log(results);

//сортировка по массиву

results.sort((a, b) => (a.average > b.average ? -1 : 1));
console.log(results);

let sredBall = 0;
let kolDebtors = 0;
let goods = 0;

console.log("Хорошисты:");
results.forEach((item) => {
  //хорошисты
  if (item.good) {
    //        console.log(item.name);

    console.log(item.toString());
    goods++;
  }

  //должники
  if (item.isDebtor) {
    kolDebtors++;
  }

  sredBall += item.average;
});

//качественная успеваемость
console.log(`качественная успеваемость = ${(goods / results.length) * 100}%`);

//качественная успеваемость
console.log(
  `абсолютная успеваемость = ${
    ((results.length - kolDebtors) / results.length) * 100
  }%`
);

//средний былл по группе
console.log(`абсолютная успеваемость = ${sredBall / results.length}`);
