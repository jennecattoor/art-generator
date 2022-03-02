import * as React from "react"
import Eyes from '../icons/Eyes.js'
import PropTypes from "prop-types";
import '../styling/Art.css';


export default function Art({addNoise, positions, amount, color}) {

  const newArray = {positions}.positions.slice(0, amount)

  return (
  <svg width="100%" height="610"xmlns="http://www.w3.org/2000/svg">
    {newArray.map((eye, index) => <g key={index}className="eyes"><Eyes addNoise={addNoise} transform={eye.position} color={color}/></g>)}
  </svg>
  )
}

  Art.propTypes = {
    addNoise: PropTypes.bool.isRequired,
    positions: PropTypes.array.isRequired,
    amount: PropTypes.number.isRequired
  }