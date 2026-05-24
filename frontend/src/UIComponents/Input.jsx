export default function Input({ label, value, ...props }) {
    return (
        <div className="field">
            <label>{label}</label>

            <input {...props} value={value} />
        </div>
    );
}
