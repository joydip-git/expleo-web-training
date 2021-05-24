import { person } from "./person";

/*
export function trainer(name, location, subjectToTeach) {
    person.call(this, name, location);
    this.subjectToTeach = subjectToTeach;
    this.show = function () {
        let partialInfo = this.__proto__.show.apply(this)
        return `${partialInfo}, ${this.subjectToTeach}`
    }
}

Object.setPrototypeOf(trainer.prototype, person.prototype)
*/
export class trainer extends person {
    constructor(name, location, subjectToTeach) {
        super(name, location);
        this.subjectToTeach = subjectToTeach;
    }
    show() {
        let partialInfo = super.show()
        return `${partialInfo}, ${this.subjectToTeach}`
    }
}