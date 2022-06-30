import React, {useState} from 'react'


const CarteGrande = ({ children, src, alt, h1, h6}) => {
  
  
   const [isHovered, setIsHovered] = useState(false);
   const onMouseEnter = () => setIsHovered(true);
   const onMouseLeave = () => setIsHovered(false);

  return (
  <div className={`carte ${isHovered ? 'setIsHovered' : 'carte' } `}  
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}>
        <img className='images' src={src} alt={alt}/>
        <h1 className='h1'>{h1}</h1>
        <h6 className='h6'>{h6}</h6>
  </div> 
  )
}

export default CarteGrande




