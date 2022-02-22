import PropTypes from "prop-types";

const Slider = ({ onValueChange, value, max, min, label }) => {
  return (
    <label>
      <p>{label} <span className="text-bold">{value}</span></p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
    </label>
  );
};

Slider.defaultProps = {
  min: 0
}

Slider.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Slider;
