import React, { memo } from 'react'


function KeypadButton(props) {
  return (
    <button className='keypad-btn' id={props.data.id} onClick={() => {props.data.callback(props.data.content)}}>
      {props.data.content}
    </button>
  );
}

function Keypad(props) {
  return (
    <div className='keypad'>
      <div className='keypad-row top'>
        <KeypadButton data={{content: 'AC', id: 'clear', callback: props.callbacks.op}} />
        <KeypadButton data={{content: '/', id: 'divide', callback: props.callbacks.op}} />
        <KeypadButton data={{content: 'x', id: 'multiply', callback: props.callbacks.op}} />
      </div>
      <div className='keypad-row'>
        <KeypadButton data={{content: '7', id: 'seven', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '8', id: 'eight', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '9', id: 'nine', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '-', id: 'subtract', callback: props.callbacks.op}} />
      </div>
      <div className='keypad-row'>
        <KeypadButton data={{content: '4', id: 'four', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '5', id: 'five', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '6', id: 'six', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '+', id: 'add', callback: props.callbacks.op}} />
      </div>
      <div className='keypad-row'>
        <KeypadButton data={{content: '1', id: 'one', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '2', id: 'two', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '3', id: 'three', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '=', id: 'equals', callback: props.callbacks.op}} />
      </div>
      <div className='keypad-row bottom'>
        <KeypadButton data={{content: '0', id: 'zero', callback: props.callbacks.num}} />
        <KeypadButton data={{content: '.', id: 'decimal', callback: props.callbacks.num}} />
      </div>
    </div>
  )
}

export default memo(Keypad)