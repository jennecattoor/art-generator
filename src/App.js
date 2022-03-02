import './styling/App.css';
import Wolf from './icons/Wolf';
import Art from './components/Art'
import Slider from './components/Slider'
import Button from './components/Button'
import Select from './components/Select'
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(10);

  const [addNoise, setAddNoise] = useState(false);

  const handleButtonClick = () => {
    setAddNoise(!addNoise)
  }

  const mood = [
    {name: 'Winter night', color: '#000000'},
    {name: 'Summer night', color: '#4B0000'},
    {name: 'Arctic night', color: '#03004B'},
    {name: 'Desert night', color: '#4B3500'},
  ]

  const positions = [
    {position: 'translate(800, 75)'},
    {position: 'translate(1375, 25)'},
    {position: 'translate(150, 100)'}, 
    {position: 'translate(600, 375)'}, 
    {position: 'translate(300, 10)'}, 
    {position: 'translate(975, 475)'},
    {position: 'translate(400, 200)'},
    {position: 'translate(1300, 400)'},
    {position: 'translate(450, 500)'}, 
    {position: 'translate(725, 500)'},
    {position: 'translate(1050, 175)'},
    {position: 'translate(0, 0)'}, 
    {position: 'translate(1225, 250)'},
    {position: 'translate(900, 300)'},
    {position: 'translate(1225, 250)'},
    {position: 'translate(525, 125)'}, 
    {position: 'translate(1150, 0)'},
    {position: 'translate(50, 475)'}, 
    {position: 'translate(675, 200)'}, 
    {position: 'translate(1450, 500)'},
    {position: 'translate(225, 300)'}
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
          <div className="input-item"><Slider label="Amount of wolves:" min={1} max={20} value={amount} onValueChange={v => setAmount(v)}/></div>
          <div className="input-item"><Button label="Make some noise:" value="Step on a branch" onClick={() => handleButtonClick()}/></div>
          <div className="input-item"><Select label="Choose color:" value={mood} /></div>
        </div>
      </section>
      <section>
        <Art addNoise={addNoise} positions={positions} amount={amount}/>
      </section>
    </div>
  );
}

export default App;
