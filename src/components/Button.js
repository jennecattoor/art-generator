import '../styling/Button.css';

const Button = ({label, value}) => {
    return (
        <label>
            <p>{label}</p>
            <input
            className="button"
            type="button"
            value={value}
            />
        </label>
    )
}

export default Button