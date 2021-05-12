/*
export function person(name, location) {
    this.name = name;
    this.location = location;
}
person.prototype.show = function () {
    return `${this.name}, ${this.location}`
}
*/
export class person {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    show() {
        return `${this.name}, ${this.location}`
    }
}
