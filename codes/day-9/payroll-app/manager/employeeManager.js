const { getRepository } = require('../repository/employeeRepository')

function addEmployee(emp) {
    let status = false;
    const employees = getRepository();
    const found = employees.find((e) => {
        return e.id === emp.id;
    })
    console.log(found)
    if (!found) {
        emp.calculateSalary()
        employees.push(emp);
        status = true;
    }
    showEmployees()
    return status;
}

function showEmployees() {
    const employees = getRepository();
    employees.forEach(e => console.log(e.show()))
}

function deleteEmployee(id) {
    let status = false;
    const employees = getRepository();
    const found = employees.find((e) => {
        return e.id === id;
    })
    if (found) {
        const index = employees.indexOf(found)
        employees.splice(index, 1)
        status = true;
    }
    return status;
}

module.exports = {
    addEmployee,
    showEmployees,
    deleteEmployee
}