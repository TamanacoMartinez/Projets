import React, {useState} from 'react'



const CartePetite = ({children, src, alt, h2, h6}) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className={`carte ${isHovered ? 'setIsHovered' : 'carte' } `} 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}>
      <img src={src} alt={alt}/>
      <h6 className='h6'>{h6}</h6>
      <h2 className='h2'>{h2}</h2>
    </div>
  )
}

export default CartePetite