export default function Select({ label, options, ...props }) {
    return (
        <div className="field">
            <label>{label}</label>

            <select {...props}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
