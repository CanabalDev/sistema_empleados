import { useState } from "react";
import Card from "../UIComponents/Card";
import Input from "../UIComponents/Input";
import Select from "../UIComponents/Select";
import HourlyFields from "../Fields/HourlyFields";
import CommissionFields from "../Fields/CommissionFields";
import SalariedFields from "../Fields/SalariedFields";
import TemporaryFields from "../Fields/TemporaryFields";

export default function EmployeeForm({ onSubmit }) {
    const [employee, setEmployee] = useState({
        type: "SALARIED",
        yearsInCompany: 0,
    });

    function update(field, value) {
        setEmployee((prev) => ({
            ...prev,

            [field]: value,
        }));
    }

    const employeeOptions = [
        { value: "SALARIED", label: "Asalariado" },
        { value: "HOURLY", label: "Por horas" },
        { value: "COMMISSION", label: "Comisión" },
        { value: "TEMPORARY", label: "Temporal" },
    ];

    return (
        <Card>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    onSubmit(employee);
                }}
            >
                <h2>Calcular Nómina</h2>

                <Select
                    label="Tipo"
                    value={employee.type}
                    options={employeeOptions}
                    onChange={(e) => update("type", e.target.value)}
                />

                <Input
                    label="ID Empleado"
                    onChange={(e) => update("id", e.target.value)}
                    type="number"
                />

                <Input
                    label="Nombre"
                    onChange={(e) => update("name", e.target.value)}
                />

                <Input
                    label="Años en la empresa"
                    type="number"
                    onChange={(e) =>
                        update("yearsInCompany", Number(e.target.value))
                    }
                />

                {employee.type === "HOURLY" && (
                    <HourlyFields employee={employee} update={update} />
                )}

                {employee.type === "COMMISSION" && (
                    <CommissionFields update={update} />
                )}

                {employee.type === "SALARIED" && (
                    <SalariedFields update={update} />
                )}

                {employee.type === "TEMPORARY" && (
                    <TemporaryFields update={update} />
                )}

                <button>Calcular</button>
            </form>
        </Card>
    );
}
