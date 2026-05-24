class PayrollService {
    static SOCIAL_SECURITY = 0.04;

    static ARL = 0.00522;

    static FOOD_BONUS = 1000000;

    static SAVINGS = 0.02;

    calculate(employee) {
        const salary = employee.calculateSalary();

        const benefits = employee.calculateBenefits();

        const grossSalary = salary + benefits;

        const mandatoryDeductions =
            grossSalary * (PayrollService.SOCIAL_SECURITY + PayrollService.ARL);

        const extraDeductions = employee.calculateAdditionalDeductions();

        const netSalary = Math.max(
            grossSalary - mandatoryDeductions - extraDeductions,
            0,
        );

        return {
            employee: employee.getName(),
            salary,
            benefits,
            grossSalary,
            mandatoryDeductions,
            extraDeductions,
            netSalary,
            savings: employee.getSavedAmount(),
        };
    }
}

export default PayrollService;
