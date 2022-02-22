import './App.css';
import Wolf from './icons/Wolf.jsx';
import Slider from './components/Slider'
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
          <p>Walking alone in a forest in the middle of the night can be scary. Luckily you can experience it online instead of putting yourself at risk</p>
        </div>
        <div className="input">
        <Slider max={50} label="Amount of wolves:" value={amount} onValueChange={v => setAmount(v)}/>
        </div>
      </section>
    </div>
  );
}

export default App;
