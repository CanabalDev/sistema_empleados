import Employee from "./Employee.js";

class CommissionEmployee extends Employee {
    constructor(id, name, yearsInCompany, baseSalary, sales, commissionRate) {
        super(id, name, yearsInCompany);

        this.setBaseSalary(baseSalary);

        this.setSales(sales);

        this.setCommissionRate(commissionRate);
    }

    setBaseSalary(salary) {
        if (salary < 0) throw new Error("Salario inválido");

        this.baseSalary = salary;
    }

    setSales(sales) {
        if (sales < 0) throw new Error("Ventas inválidas");

        this.sales = sales;
    }

    setCommissionRate(rate) {
        if (rate < 0 || rate > 1) {
            throw new Error("Comisión inválida");
        }

        this.commissionRate = rate;
    }

    calculateSalary() {
        const extra = this.sales > 20000000 ? this.sales * 0.03 : 0;

        return (
            this.baseSalary +
            this.sales * this.commissionRate +
            this.calculateBonus()
        );
    }

    calculateBonus() {
        return this.sales > 20000000 ? this.sales * 0.03 : 0;
    }

    calculateBenefits() {
        return 1000000;
    }
}

export default CommissionEmployee;
