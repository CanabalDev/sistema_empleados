import SalariedEmployee from "../models/SalariedEmployee.js";

import HourlyEmployee from "../models/HourlyEmployee.js";

import CommissionEmployee from "../models/CommissionEmployee.js";

import TemporaryEmployee from "../models/TemporaryEmployee.js";

class EmployeeFactory {
    static create(data) {
        switch (data.type) {
            case "SALARIED":
                return new SalariedEmployee(
                    data.id,
                    data.name,
                    data.yearsInCompany,
                    data.monthlySalary,
                );

            case "HOURLY":
                return new HourlyEmployee(
                    data.id,
                    data.name,
                    data.yearsInCompany,
                    data.hoursWorked,
                    data.hourlyRate,
                    data.acceptSavingsFund,
                );

            case "COMMISSION":
                return new CommissionEmployee(
                    data.id,
                    data.name,
                    data.yearsInCompany,
                    data.baseSalary,
                    data.sales,
                    data.commissionRate,
                );

            case "TEMPORARY":
                return new TemporaryEmployee(
                    data.id,
                    data.name,
                    data.yearsInCompany,
                    data.monthlySalary,
                    data.contractEndDate,
                );

            default:
                throw new Error("Tipo inválido");
        }
    }
}

export default EmployeeFactory;
