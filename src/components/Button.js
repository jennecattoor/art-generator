import '../styling/Button.css';

const Button = ({onClick, label, value}) => {
    return (
        <label>
            <p>{label}</p>
            <input
                className="button"
                type="button"
                value={value}
                onClick={() => onClick()}
            />
        </label>
    )
}

export default Button