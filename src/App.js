import React, { use } from 'react'
import DisplayBox from './DisplayBox'
import { useState } from 'react'
import AddColorName from './AddColorName'


const App = () => {
const [color, changeColor] = useState('Empty value')

const[tColor, newTextColor] = useState('black')

const toggleColor = () => {
  if(tColor === 'black'){
    newTextColor('white')
  } else if(tColor === 'white'){
    newTextColor('black')
  }
}


  return (
    <div className='app'>
    <DisplayBox color = {color}
    tColor = {tColor}
    />
    <AddColorName 
    changeColor={changeColor} 
    toggleColor={toggleColor}
    />
    </div>
  )
}

export default App