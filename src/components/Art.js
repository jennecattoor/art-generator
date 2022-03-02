import '../styling/Art.css';
import Eyes from '../icons/Eyes.js'

import * as React from "react"

export default function Art({addNoise, positions, amount}) {

    const newArray = {positions}.positions.slice(0, amount)

  return (
  <svg width="100%" height="610"xmlns="http://www.w3.org/2000/svg">
    {newArray.map((eye, index) => <g key={index}className="eyes"><Eyes addNoise={addNoise} transform={eye.position}/></g>)}
  </svg>
  )
}