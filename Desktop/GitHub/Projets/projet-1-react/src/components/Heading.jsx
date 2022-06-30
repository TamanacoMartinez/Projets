import React from 'react'

const Heading = ({children, h1, h2, h4}) => {
  return (
    <div>
        <h1 className='h1'>{h1}</h1>
        <h2 className='h2'>{h2}</h2>
        <h4 className='h4'>{h4}</h4>
    </div>
  )
}

export default Heading