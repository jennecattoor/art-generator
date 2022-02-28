import './App.css';
import Wolf from './icons/Wolf';
import Eyes from './icons/Eyes'
import Slider from './components/Slider'
import Button from './components/Button'
import Select from './components/Select'
import { useState } from 'react';

function App() {
    const [amount, setAmount] = useState(15);

     const [addNoise, setAddNoise] = useState(false);

    const handleButtonClick = e => {
      setAddNoise(!addNoise)
    }

    const mood = [
      {name: 'Winter night', color: '#000000'},
      {name: 'Summer night', color: '#5a5a97'},
      {name: 'Arctic night', color: '#0f0f41'},
      {name: 'Desert night', color: '#02012c'},
    ]
  return (
    <div className="container">
      <section className='info-input'>
        <div className="text">
          <div className='title-wrapper'>
            <h1>The forest by night</h1><div className="icon-wolf"><Wolf /></div>
          </div>
          <p>Being alone in a forest in the middle of the night can be scary. Thanks to the internet, you can experience it without putting your life at risk.</p>
        </div>
        <div className="input">
          <div className="input-item"><Slider label="Amount of wolves:" min={1} max={30} value={amount} onValueChange={v => setAmount(v)}/></div>
          <div className="input-item"><Button label="Make some noise:" value="Step on a branch" onClick={handleButtonClick} /></div>
          <div className="input-item"><Select label="Choose color:" value={mood} /></div>
        </div>
      </section>
      <section>
        <div className="eyes"><Eyes /></div>
      </section>
    </div>
  );
}

export default App;
