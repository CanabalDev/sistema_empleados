import Employee from "./Employee.js";

class TemporaryEmployee extends Employee {
    constructor(id, name, yearsInCompany, monthlySalary, contractEndDate) {
        super(id, name, yearsInCompany);

        this.setSalary(monthlySalary);

        this.setContractEndDate(contractEndDate);
    }

    setSalary(salary) {
        if (salary < 0) {
            throw new Error("Salario inválido");
        }

        this.monthlySalary = salary;
    }

    setContractEndDate(date) {
        if (!date) {
            throw new Error("Fecha de fin de contrato obligatoria");
        }

        const endDate = new Date(date);

        if (endDate <= new Date()) {
            throw new Error("La fecha de fin de contrato debe ser futura");
        }

        this.contractEndDate = date;
    }

    calculateSalary() {
        return this.monthlySalary;
    }
}

export default TemporaryEmployee;
