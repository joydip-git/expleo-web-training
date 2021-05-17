var anilPerson = {
    name: 'anil',
    id: 2,
    salary: 1000,
    printInfo: () => {
        console.log(this)
        return this.name + ', ' + this.id + ', ' + this.salary;
    }
}
var pInfoFn = anilPerson.printInfo;
var info = pInfoFn();
console.log(info)

//var info = anilPerson.printInfo();
/*
anilPerson.location = "Bangalore"
anilPerson.printSalary = () => {
    console.log(this)
    console.log(this.salary)
}
//anilPerson.printSalary();
var print = anilPerson.printSalary;
print();

// for (var propName in anilPerson) {
//     console.log(propName + ':' + anilPerson[propName])
// }
*/