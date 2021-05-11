export function person(name, id, salary) {
    this.personId = id;
    this.personName = name;
    this.personSalary = salary;
    this.show = function () {
        // return this.personName + ', ' + this.personId + ', ' + this.personSalary
        //string interpolation/string template/templated string
        const info = `
            Name: ${this.personName},
            Id:${this.personId},
            Salary:${this.personSalary}
        `;
        return info;
    }
}