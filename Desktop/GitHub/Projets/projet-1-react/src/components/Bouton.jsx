import React, {useState} from 'react'

const Bouton = () => {

    const [isToggleOn, setIsToggleOn] = useState(false);
    const etat = document.getElementsByClassName("container")
    
    function toggle () {
      if (isToggleOn===true) {
        etat.classList.add("etatClair")
      };
    } 
    
    // J’ai essayé plusieurs choses pour faire changer l’état sombre/clair  
    // avec le bouton  sans succès jusqu’à là :/
    
  
  return (
    <div className='bouton' onClick={toggle}>
      <h3>Dark Mode&nbsp;&nbsp;&nbsp;</h3>
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>
    </div>
  )
}

export default Bouton