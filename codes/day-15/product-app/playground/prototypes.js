export function person(name, location) {
    this.name = name;
    this.location = location;
    // this.show = function () {
    //     return `${this.name}, ${this.location}`
    // }
}
person.prototype.show = function () {
    return `${this.name}, ${this.location}`
}

export function trainer(name, location, subjectToTeach) {
    person.call(this, name, location);
    // let boundPersonFn = person.bind(this)
    // boundPersonFn(name, location)
    this.subjectToTeach = subjectToTeach;
    this.show = function () {
        // let partialInfo = person.prototype.show.apply(this)
        let partialInfo = this.__proto__.show.apply(this)
        return `${partialInfo}, ${this.subjectToTeach}`
    }
}

Object.setPrototypeOf(trainer.prototype, person.prototype)

export function trainee(name, location, company, domain) {
    person.call(this, name, location)
    this.company = company;
    this.domain = domain;
    this.show = function () {
        //let partialInfo = person.prototype.show.apply(this)
        let partialInfo = this.__proto__.show.apply(this)
        return `${partialInfo}, ${this.company}, ${this.domain}`
    }
}

Object.setPrototypeOf(trainee.prototype, person.prototype)