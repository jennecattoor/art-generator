import PropTypes from "prop-types";
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

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Button