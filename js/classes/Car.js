class Car{
    constructor(mark, yearOfIssue, price){
        this.mark = mark;
        this.yearOfIssue = yearOfIssue;
        this.price = price;
    }
}

let car = new Car("Lada", 2004, 600500);
console.table(car);