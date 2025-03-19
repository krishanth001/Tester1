import React from 'react'

const AddColorName = ({color, changeColor, toggleColor}) => {
  return (
    <div>
    <input autoFocus
    type='text'
    id='addColor'
    className = 'addcolor'
    placeholder = 'Add colour'
    required
    value={color}
    onChange={(e) => {changeColor(e.target.value)}}></input><br></br>
    <button className='cButton'
    onClick={() => toggleColor()}>Toggle Text Color</button>
    </div>
  )
}

export default AddColorName