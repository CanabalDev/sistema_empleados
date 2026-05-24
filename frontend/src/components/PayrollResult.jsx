export default function PayrollResult({ result }) {
    if (!result) return null;

    return (
        <div>
            <h2>Resultado</h2>

            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    );
}
