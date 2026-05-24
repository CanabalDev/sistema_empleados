import Employee from "./Employee.js";

class HourlyEmployee extends Employee {
    constructor(
        id,
        name,
        yearsInCompany,
        hoursWorked,
        hourlyRate,
        acceptSavingsFund = false,
        savedAmount = 0,
    ) {
        super(id, name, yearsInCompany);

        this.setHoursWorked(hoursWorked);

        this.setHourlyRate(hourlyRate);

        this.setAcceptSavingsFund(acceptSavingsFund);

        this.setSavedAmount(savedAmount);
    }

    setHoursWorked(hours) {
        if (hours < 0) throw new Error("Horas inválidas");

        this.hoursWorked = hours;
    }

    setHourlyRate(rate) {
        if (rate < 0) throw new Error("Tarifa inválida");

        this.hourlyRate = rate;
    }

    setAcceptSavingsFund(accepted) {
        this.acceptSavingsFund = Boolean(accepted);
    }

    setSavedAmount(amount) {
        if (amount < 0) {
            throw new Error("Ahorro inválido");
        }

        this.savedAmount = amount;
    }

    getAcceptSavingsFund() {
        return this.acceptSavingsFund;
    }

    getSavedAmount() {
        return this.savedAmount;
    }

    addSavings(value) {
        this.savedAmount += value;
    }

    calculateSalary() {
        if (this.hoursWorked <= 40) {
            return this.hoursWorked * this.hourlyRate;
        }

        const normal = 40 * this.hourlyRate;

        const extra = (this.hoursWorked - 40) * (this.hourlyRate * 1.5);

        return normal + extra;
    }

    calculateAdditionalDeductions() {
        if (!this.acceptSavingsFund || this.yearsInCompany <= 1) {
            return 0;
        }

        const savings = this.calculateSalary() * 0.02;

        this.addSavings(savings);

        return savings;
    }
}

export default HourlyEmployee;
