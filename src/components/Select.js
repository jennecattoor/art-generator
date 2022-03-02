import PropTypes from "prop-types";
import '../styling/Select.css';

const Select = ({label, value, onValueChange}) => {

    return (
        <label>
            <p>{label}</p>
            <select
                className="select"
                name="night"
                onChange={(e) => onValueChange(e.target.value)}>
                {value.map(mood => <option key={mood.name} value={mood.color} >{mood.name}</option>)}
            </select>
        </label>
    )
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    onValueChange: PropTypes.func.isRequired
}

export default Select