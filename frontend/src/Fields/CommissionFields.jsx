import Input from "../UIComponents/Input";

export default function CommissionFields({ update }) {
    return (
        <>
            <Input
                label="Salario base"
                type="number"
                onChange={(e) => update("baseSalary", Number(e.target.value))}
            />

            <Input
                label="Ventas"
                type="number"
                onChange={(e) => update("sales", Number(e.target.value))}
            />

            <Input
                label="Comisión"
                type="number"
                step="0.01"
                onChange={(e) =>
                    update("commissionRate", Number(e.target.value))
                }
            />
        </>
    );
}
