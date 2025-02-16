/*
Author: Ambuj
Created on: 06 Feb 2025
*/
import Banner from "./Banner";
import HomeCard from "./HomeCard";
import { Container, Row, Col } from 'react-bootstrap';  

const HomePage = () => {
  return (
    <div>
      <Banner />
      <br />
      <h2>Your Complete Pooja Solution</h2>
      <p>"Whether you prefer online pooja or visiting us in person, we are your one-stop destination for all pooja needs. From pandits to ritual essentials, find everything you need for a perfect pooja, anytime, anywhere. Experience convenience and devotion, seamlessly blended!" 🙏✨</p>
      {/* Other homepage content */}
      <br/>
      <br/>
     
      <div className="card-container">
      <HomeCard 
        image="/photos/ganeshPooja.png"
        title="Ganesh Pooja"
        text="A special pooja for Lord Ganesha."
        buttonText="Book Now"
      />
      
      <HomeCard 
        image="/photos/lakshmiPooja.png"
        title="Lakshmi Pooja"
        text="Perform this pooja for wealth and prosperity."
        buttonText="Learn More"
      />
      <HomeCard 
        image="/photos/SaraswatiPooja.png"
        title="Saraswati Pooja"
        text="Invoke Goddess Saraswati for wisdom."
        buttonText="Get Details"
      />
      
        
      </div>



      {/* <br/> */}
    </div>
  );
};

export default HomePage;
