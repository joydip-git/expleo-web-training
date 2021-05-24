var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var add = function (a, b) { return (a + b); };
function calculate(fnRef, a, b) {
    console.log(fnRef(a, b));
}
calculate(add, 10, 20);
calculate(function (a, b) { return a - b; }, 10, 5);
var anilObj = {
    name: 'anil',
    id: 101,
    salary: 1000,
    print: function () {
        return this.name + this.salary + this.id;
    }
};
var Person = /** @class */ (function () {
    function Person(name, id, salary) {
        this.personId = id;
        this.personName = name;
        this.personSalary = salary;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.personName;
        },
        set: function (value) {
            this.personName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Id", {
        get: function () {
            return this.personId;
        },
        set: function (value) {
            this.personId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Salary", {
        get: function () {
            return this.personSalary;
        },
        set: function (value) {
            this.personSalary = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return this.personName + "," + this.personSalary;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, id, salary, compnayName) {
        var _this = _super.call(this, name, id, salary) || this;
        _this.company = compnayName;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "Company", {
        get: function () {
            return this.company;
        },
        set: function (value) {
            this.company = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.print = function () {
        return _super.prototype.print.call(this) + ", " + this.company;
    };
    return Employee;
}(Person));
var joydipEmployee = new Employee('joydip', 101, 1000, 'Expleo');
console.log(joydipEmployee.print());
var Product = /** @class */ (function () {
    // name: string;
    // id: number;
    // description: string;
    // price: number;
    function Product(name, id, description, price) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.price = price;
    }
    Product.prototype.show = function () {
        return this.name;
    };
    return Product;
}());
var p = new Product('del xps', 1, 'new', 10000);
console.log(p.show());
//# sourceMappingURL=index.js.map