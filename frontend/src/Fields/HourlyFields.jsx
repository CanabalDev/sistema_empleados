import Input from "../UIComponents/Input";

export default function HourlyFields({ employee, update }) {
    return (
        <>
            <Input
                label="Horas"
                type="number"
                onChange={(e) => update("hoursWorked", Number(e.target.value))}
            />

            <Input
                label="Tarifa"
                type="number"
                onChange={(e) => update("hourlyRate", Number(e.target.value))}
            />

            <label>
                <input
                    type="checkbox"
                    onChange={(e) =>
                        update("acceptSavingsFund", e.target.checked)
                    }
                    disabled={employee.yearsInCompany <= 1}
                />
                Fondo ahorro
            </label>
        </>
    );
}
