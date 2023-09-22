import React from 'react';
import '../style.css';
import CalcBtns from './CalcBtns';
import Quote from './Quotes';

const Calculator = () => (
  <>
    <div className="calc__grid">
      <CalcBtns />
      <Quote />
    </div>
  </>
);

export default Calculator;
