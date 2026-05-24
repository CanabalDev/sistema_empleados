import Input from "../UIComponents/Input";

export default function TemporaryFields({ update }) {
    return (
        <>
            <Input
                label="Salario mensual"
                type="number"
                onChange={(e) =>
                    update("monthlySalary", Number(e.target.value))
                }
            />

            <Input
                label="Fecha fin contrato"
                type="date"
                onChange={(e) => update("contractEndDate", e.target.value)}
            />
        </>
    );
}
