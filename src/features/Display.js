import React, { useState } from 'react'

function Display(props) {

  // There might be a way to do this without using state, but I couldn't get it to update correctly otherwise
  const [answer, setAnswer] = useState(false);

  if (answer !== props.data.answer) setAnswer(props.data.answer);

  return (
    <div className='display-container'>
      {/* There's probably a cleaner way to make this work but it's fine */}
      {answer ? <div className='display-formula'>{props.data.formula} <span id='display'>{props.data.display}</span></div> : <div className='display-formula'><span id='display'>{props.data.display + props.data.number}</span></div>}
      <div className='display-input'>{props.data.number}</div>
    </div>
  )

}

export default Display