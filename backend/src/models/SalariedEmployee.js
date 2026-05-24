import Employee from "./Employee.js";

class SalariedEmployee extends Employee {
    constructor(id, name, yearsInCompany, monthlySalary) {
        super(id, name, yearsInCompany);

        this.setMonthlySalary(monthlySalary);
    }

    setMonthlySalary(salary) {
        if (salary < 0) throw new Error("Salario inválido");

        this.monthlySalary = salary;
    }

    calculateSalary() {
        const bonus = this.yearsInCompany > 5 ? this.monthlySalary * 0.1 : 0;

        return this.monthlySalary + bonus;
    }

    calculateBenefits() {
        return 1000000;
    }
}

export default SalariedEmployee;
