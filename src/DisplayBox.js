import React from 'react'

const DisplayBox = ({color, tColor}) => {
  return (
    <div className='square'
    style={{backgroundColor : color}}>
    <p style={{color : tColor}}> {color}
    </p>
    </div>
  )
}

export default DisplayBox