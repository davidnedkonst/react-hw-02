export default function InputForm({ title, type, value }) {
    return (
        <div>
            <p>{title}</p>
            <input type={type} value={value} />
        </div>
    );
}