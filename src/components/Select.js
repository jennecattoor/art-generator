import PropTypes from "prop-types";
import '../styling/Select.css';

const Select = ({label, value}) => {

    const handleChange = (color) => {
        document.documentElement.style.setProperty('--color-background', color)
    }

    return (
        <label>
            <p>{label}</p>
            <select
                className="select"
                name="night"
                onChange={(e) => handleChange(e.target.value)}>
                {value.map(mood => <option key={mood.name} value={mood.color} >{mood.name}</option>)}
            </select>
        </label>
    )
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired
}

export default Select