import EmployeeFactory from "../factories/EmployeeFactory.js";

import PayrollService from "../services/PayrollService.js";

class PayrollController {
    static calculate(req, res) {
        try {
            const employee = EmployeeFactory.create(req.body);

            const payroll = new PayrollService();

            const result = payroll.calculate(employee);

            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({
                error: error.message,
            });
        }
    }
}

export default PayrollController;
