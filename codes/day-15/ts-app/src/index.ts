type fnType = (a: number, b: number, c?: number) => number
const add: fnType = (a: number, b: number) => (a + b);

function calculate(fnRef: fnType, a: number, b: number) {
    console.log(fnRef(a, b))
}
calculate(add, 10, 20)
calculate((a, b) => a - b, 10, 5)

type objType = {
    name: string,
    id: number,
    salary: number,
    print: () => string,
    location?: string
}

const anilObj: objType = {
    name: 'anil',
    id: 101,
    salary: 1000,
    print: function () {
        return this.name + this.salary + this.id
    }
}

class Person {
    private personName: string;
    private personId: number;
    private personSalary: number;
    constructor(name: string, id: number, salary: number) {
        this.personId = id;
        this.personName = name;
        this.personSalary = salary;
    }
    public set Name(value: string) {
        this.personName = value;
    }
    public get Name() {
        return this.personName;
    }
    public set Id(value: number) {
        this.personId = value;
    }
    public get Id() {
        return this.personId;
    }
    public set Salary(value: number) {
        this.personSalary = value;
    }
    public get Salary() {
        return this.personSalary;
    }
    public print(): string {
        return `${this.personName},${this.personSalary}`
    }
}
class Employee extends Person {
    private company: string;
    constructor(name: string, id: number, salary: number, compnayName: string) {
        super(name, id, salary)
        this.company = compnayName
    }
    public set Company(value: string) {
        this.company = value;
    }
    public get Company() {
        return this.company;
    }
    public print(): string {
        return `${super.print()}, ${this.company}`
    }
}

const joydipEmployee = new Employee('joydip', 101, 1000, 'Expleo')
console.log(joydipEmployee.print())

interface IProduct {
    name: string;
    id: number;
    description: string;
    price: number;
    show(): string; //abstract function
}

class Product implements IProduct {
    // name: string;
    // id: number;
    // description: string;
    // price: number;
    constructor(public name: string, public id: number, public description: string, public price: number) {
    }
    public show(): string {
        return this.name;
    }
}

const p = new Product('del xps', 1, 'new', 10000)
console.log(p.show())