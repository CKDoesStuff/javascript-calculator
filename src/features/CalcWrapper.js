import React, { useState } from 'react'
import Display from './Display';
import Keypad from './Keypad';

const math = require('mathjs');

function updateDisplay(state, num) {
  if (num === '.') { // Don't allow multiple decimals in a single number
    return state.number.includes('.') ? state.number : state.number + num;
  } else {
    return state.number=== '0' ? num : state.number + num;
  }
}

function CalcWrapper(props) {

  const initialState = {
    formula: '',
    display: '',
    number: '0',
    answer: false
  }

  const [state, setState] = useState(initialState);


  // Annoying state logic that I couldn't think of a nice way to build outside of the component scope
  // Callback for operator button
  function opCallback(op) {
    switch(op) {
      case 'AC':
        setState(initialState); // Clear
        break;
      case '=':
        if (state.answer) {
          break;
        }
        setState({
          formula: state.display + state.number + op, 
          display: math.evaluate((state.display + state.number).replace('x', '*')), // Fix multiplication symbols in eval arg then evaluate
          number: '0', 
          answer: true // Lets other functions know that a calculation has been performed
        });
        break;
      default:
        if (state.display && state.number === '0' && /\d\D-?$/.test(state.display)) { // If multiple ops are input in a row, override previous
          if (op === '-') { // Account for inputting negative numbers
            setState({...state, display: state.display + op})
          } else {
            setState({...state, display: state.display.replace(/(^[\d.]*)\D-?$/, `$1${op}`)});
          }
          break;
        }
        if (state.answer) { // Insert previous answer automatically if an op is input after a calculation
          setState({...initialState, display: state.display + op});
        } else {
          setState({...state, display: state.display + state.number + op, number: '0'});
        }
        break;
    }
  }

  // Callback for number buttons
  function numCallback(num) {
    if (state.answer) { // Reset state when number is input after a calculation
      setState({
        ...initialState, 
         number: updateDisplay(initialState, num)
       });

    } else {
      setState({
       ...state, 
        number: updateDisplay(state, num)
      });
    }
  }

  return (
    <div className='calculator'>
      <Display data={state} />
      <Keypad callbacks={{op: opCallback, num: numCallback}}/>
    </div>
  )
}

export default CalcWrapper