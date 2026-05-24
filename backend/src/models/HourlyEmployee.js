import Employee from "./Employee.js";

class HourlyEmployee extends Employee {
    constructor(id, name, yearsInCompany, hoursWorked, hourlyRate) {
        super(id, name, yearsInCompany);

        this.setHoursWorked(hoursWorked);

        this.setHourlyRate(hourlyRate);
    }

    setHoursWorked(hours) {
        if (hours < 0) throw new Error("Horas inválidas");

        this.hoursWorked = hours;
    }

    setHourlyRate(rate) {
        if (rate < 0) throw new Error("Tarifa inválida");

        this.hourlyRate = rate;
    }

    calculateSalary() {
        if (this.hoursWorked <= 40) {
            return this.hoursWorked * this.hourlyRate;
        }

        const normal = 40 * this.hourlyRate;

        const extra = (this.hoursWorked - 40) * (this.hourlyRate * 1.5);

        return normal + extra;
    }
}

export default HourlyEmployee;
