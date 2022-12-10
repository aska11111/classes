export class Exam {
  //создали конструктор
  constructor(name, surname, markBD, markJS, markPHP) {
    this.name = name;
    this.surname = surname;
    this.markBD = markBD;
    this.markJS = markJS;
    this.markPHP = markPHP;
  }

  //переопределение метода ToString
  toString() {
    return `${this.surname} ${this.name} сдал экзамен по БД на ${this.markBD}, по JS на ${this.markJS} и по PHP на ${this.markPHP}`;
  }

  get average() {
    return (this.markBD + this.markJS + this.markPHP) / 3;
  }

  //   get good() {
  //     return (this.markBD >= 4 && this.markJS >=4 && this.markPHP >= 4) ? "Хорошист" : "Не хорошист";
  //   }

  //   get isDebtor() {
  //     return (this.markBD == 2 || this.markJS == 2 || this.markPHP == 2) ? "Должник" : "Долгов нет";
  //   }

  get good() {
    return this.markBD >= 4 && this.markJS >= 4 && this.markPHP >= 4;
  }

  get isDebtor() {
    return this.markBD == 2 || this.markJS == 2 || this.markPHP == 2;
  }
}
