export function Exam(name, surname, markBD, markJS, markPHP) {
  this.name = name;
  this.surname = surname;
  this.markBD = markBD;
  this.markJS = markJS;
  this.markPHP = markPHP;
  this.toString = function () {
    return `${this.surname} ${this.name} сдал экзамен по БД на ${this.markBD}, по JS на ${this.markJS} и по PHP на ${this.markPHP}`;
  };
}

Object.defineProperty(Exam.prototype, "avergade", {
  get() {
    return (this.markBD + this.markJS + this.markPHP) / 3;
  },
});

Object.defineProperty(Exam.prototype, "good", {
  get() {
    return this.markBD >= 4 && this.markJS >= 4 && this.markPHP >= 4;
  },
});

Object.defineProperty(Exam.prototype, "isDebtor", {
  get() {
    return this.markBD == 2 || this.markJS == 2 || this.markPHP == 2;
  },
});
