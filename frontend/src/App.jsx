import { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import PayrollResult from "./components/PayrollResult";
import calculatePayroll from "./services/payrollApi";

function App() {
    const [result, setResult] = useState();

    async function calculate(employee) {
        try {
            const data = await calculatePayroll(employee);

            setResult(data);
        } catch (error) {
            alert(error.response?.data?.error);
        }
    }

    return (
        <>
            <h1>Sistema Nómina</h1>

            <EmployeeForm onSubmit={calculate} />

            <PayrollResult result={result} />
        </>
    );
}

export default App;
