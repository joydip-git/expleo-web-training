import { person } from "./person";
/*
export function trainee(name, location, company, domain) {
    person.call(this, name, location)
    this.company = company;
    this.domain = domain;
    this.show = function () {
        let partialInfo = this.__proto__.show.apply(this)
        return `${partialInfo}, ${this.company}, ${this.domain}`
    }
}

Object.setPrototypeOf(trainee.prototype, person.prototype)
*/
export class trainee extends person {
    constructor(name, location, company, domain) {
        super(name, location)
        this.company = company;
        this.domain = domain;
    }
    show() {
        let partialInfo = super.show()
        return `${partialInfo}, ${this.company}, ${this.domain}`
    }
}

//ES6: class, extends, super