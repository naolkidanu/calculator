import React from 'react';
import '../style.css';
import CalcBtns from './CalcBtns';
import Quote from './Quotes';
import Home from './Home';

const Calculator = () => (
  <>
    <div className="calc__grid">
      <Home />
      <CalcBtns />
      <Quote />
    </div>
  </>
);

export default Calculator;
