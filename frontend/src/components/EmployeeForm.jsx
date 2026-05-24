import { useState } from "react";

export default function EmployeeForm({ onSubmit }) {
    const [employee, setEmployee] = useState({
        type: "SALARIED",
    });

    function update(field, value) {
        setEmployee((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    function submit(e) {
        e.preventDefault();

        onSubmit(employee);
    }

    return (
        <form onSubmit={submit}>
            <h2>Empleado</h2>

            <select
                value={employee.type}
                onChange={(e) => update("type", e.target.value)}
            >
                <option value="SALARIED">Asalariado</option>

                <option value="HOURLY">Por Horas</option>

                <option value="COMMISSION">Comisión</option>

                <option value="TEMPORARY">Temporal</option>
            </select>

            <br />

            <input
                placeholder="ID"
                onChange={(e) => update("id", Number(e.target.value))}
            />

            <br />

            <input
                placeholder="Nombre"
                onChange={(e) => update("name", e.target.value)}
            />

            <br />

            <input
                type="number"
                placeholder="Años empresa"
                onChange={(e) =>
                    update("yearsInCompany", Number(e.target.value))
                }
            />

            <br />

            {employee.type === "SALARIED" && (
                <input
                    type="number"
                    placeholder="Salario mensual"
                    onChange={(e) =>
                        update("monthlySalary", Number(e.target.value))
                    }
                />
            )}

            {employee.type === "HOURLY" && (
                <>
                    <input
                        type="number"
                        placeholder="Horas"
                        onChange={(e) =>
                            update("hoursWorked", Number(e.target.value))
                        }
                    />

                    <br />

                    <input
                        type="number"
                        placeholder="Tarifa"
                        onChange={(e) =>
                            update("hourlyRate", Number(e.target.value))
                        }
                    />

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                update("acceptSavingsFund", e.target.checked)
                            }
                        />
                        Fondo ahorro
                    </label>
                </>
            )}

            {employee.type === "COMMISSION" && (
                <>
                    <input
                        type="number"
                        placeholder="Salario base"
                        onChange={(e) =>
                            update("baseSalary", Number(e.target.value))
                        }
                    />

                    <br />

                    <input
                        type="number"
                        placeholder="Ventas"
                        onChange={(e) =>
                            update("sales", Number(e.target.value))
                        }
                    />

                    <br />

                    <input
                        type="number"
                        step="0.01"
                        placeholder="Comisión (0.10)"
                        onChange={(e) =>
                            update("commissionRate", Number(e.target.value))
                        }
                    />
                </>
            )}

            {employee.type === "TEMPORARY" && (
                <>
                    <input
                        type="number"
                        placeholder="Salario mensual"
                        onChange={(e) =>
                            update("monthlySalary", Number(e.target.value))
                        }
                    />

                    <br />

                    <input
                        type="date"
                        onChange={(e) =>
                            update("contractEndDate", e.target.value)
                        }
                    />
                </>
            )}

            <br />
            <br />

            <button>Calcular Nómina</button>
        </form>
    );
}
