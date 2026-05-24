function formatMoney(value) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
    }).format(value || 0);
}

function Item({ label, value }) {
    return (
        <div className="payroll-item">
            <span>{label}</span>

            <strong>{value}</strong>
        </div>
    );
}

export default function PayrollResult({ result }) {
    if (!result) return null;

    return (
        <div className="payroll-card">
            <h2>Resultado Nómina</h2>

            <h3>{result.employee}</h3>

            <Item label="Salario" value={formatMoney(result.salary)} />

            <Item label="Beneficios" value={formatMoney(result.benefits)} />

            <Item
                label="Salario Bruto"
                value={formatMoney(result.grossSalary)}
            />

            <Item
                label="Deducciones"
                value={formatMoney(
                    result.mandatoryDeductions + result.extraDeductions,
                )}
            />

            {result.savings > 0 && (
                <Item
                    label="Ahorro acumulado"
                    value={formatMoney(result.savings)}
                />
            )}

            <div className="net-salary">
                <span>Salario Neto</span>

                <strong>{formatMoney(result.netSalary)}</strong>
            </div>
        </div>
    );
}
