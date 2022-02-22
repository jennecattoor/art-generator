import './App.css';
import Wolf from './icons/Wolf.jsx';
import Slider from './components/Slider'
import Button from './components/Button'
import { useState } from 'react';

function App() {
    const [amount, setAmount] = useState(25);
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
          <div className="input-item"><Slider min={1} max={50} label="Amount of wolves:" value={amount} onValueChange={v => setAmount(v)}/></div>
          <div className="input-item"><Button label="Make some noise:" value="Step on a branch"/></div>
        </div>
      </section>
    </div>
  );
}

export default App;
