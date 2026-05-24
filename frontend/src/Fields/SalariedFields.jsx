import Input from "../UIComponents/Input";

export default function SalariedFields({ update }) {
    return (
        <Input
            label="Salario mensual"
            type="number"
            onChange={(e) => update("monthlySalary", Number(e.target.value))}
        />
    );
}
