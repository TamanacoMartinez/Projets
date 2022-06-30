
import icon_facebook from '../images/icon-facebook.svg';
import icon_twitter from '../images/icon-twitter.svg';
import icon_youtube from '../images/icon-youtube.svg';
import icon_instagram from '../images/icon-instagram.svg';


import Bouton from "./Bouton";
import Container from "./Container";
import CarteGrande from "./CarteGrande";
import CartePetite from "./CartePetite";
import Heading from './Heading';


function App() {
  return (
    <div className="App">
      <Container>
        <Heading h1={"Social Media Dashboard"} h4={"Total Followers: 23,004"}/>         
        <Bouton/>
        <CarteGrande src={icon_facebook} alt={"Facebook"} h1={"1987"} h6={"FOLLOWERS"}/>
        <CarteGrande src={icon_twitter} alt={"Twitter"} h1={"1044"} h6={"FOLLOWERS"}/>
        <CarteGrande src={icon_instagram} alt={"Instagram"} h1={"11k"} h6={"FOLLOWERS"}/>
        <CarteGrande src={icon_youtube} alt={"Youtube"} h1={"8239"} h6={"SUBSCRIBERS"}/>
        <Heading h2={"Overview - Today"}/>
        <CartePetite src={icon_facebook} alt={"Facebook"} h2={"87"} h6={"Page Views"}/>
        <CartePetite src={icon_facebook} alt={"Facebook"} h2={"52"}  h6={"Likes"}/>
        <CartePetite src={icon_instagram} alt={"Instagram"} h2={"5462"}  h6={"Likes"}/>
        <CartePetite src={icon_instagram} alt={"Instagram"} h2={"52k"}  h6={"Profile Views"}/>
        <CartePetite src={icon_twitter} alt={"Twitter"} h2={"117"}  h6={"Retweets"}/>
        <CartePetite src={icon_twitter} alt={"Twitter"} h2={"507"}  h6={"Likes"}/>
        <CartePetite src={icon_youtube} alt={"Youtube"} h2={"107"}  h6={"Likes"}/>
        <CartePetite src={icon_youtube} alt={"Youtube"} h2={"1407"} h6={"Total Views"}/>
      </Container>
    
    </div>
  );
}

export default App;
