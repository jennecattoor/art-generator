import PropTypes from "prop-types";
import '../styling/Color.css';


const Color = ({onValueChange, label}) => {
    return (
        <label>
            <p>{label}</p>
            <input
                className="color"
                type="Color"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </label>
    )
}

Color.propTypes = {
    label: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
}

export default Color