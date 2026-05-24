import SalariedEmployee from "../models/SalariedEmployee.js";

import HourlyEmployee from "../models/HourlyEmployee.js";

import CommissionEmployee from "../models/CommissionEmployee.js";

import TemporaryEmployee from "../models/TemporaryEmployee.js";

const employees = [
    new SalariedEmployee(1, "Carlos", 6, 5000000),

    new HourlyEmployee(2, "Ana", 2, 50, 50000),

    new CommissionEmployee(3, "Luis", 3, 3000000, 25000000, 0.1),

    new TemporaryEmployee(4, "Laura", 0, 2500000, "2027-01-01"),
];

employees.forEach((e) => {
    console.log(e.constructor.name);

    console.log(e.getName());

    console.log(e.calculateSalary());

    console.log("==========");
});
