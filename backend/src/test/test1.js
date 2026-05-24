import Employee from "../models/Employee.js";

const employee = new Employee(1, "Carlos", 2);

console.log(employee.getName());

employee.calculateSalary();
