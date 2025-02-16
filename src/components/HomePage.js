/*
Author: Ambuj
Created on: 06 Feb 2025
*/
import Banner from "./Banner";
import HomeCard from "./HomeCard";
import { Container, Row, Col } from 'react-bootstrap';  

import React, { useEffect, useState } from 'react';
import HomePoojaTypeService from '../api/HomePoojaTypeService';
// import HomeCard from '../components/HomeCard';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


// const CardContainer = ({ count }) => {
//   if (count <= 0) return null;

//   return (
//     <>
//        <HomeCard 
//         text="Browse All types of Pooja"
//         image="/photos/ganeshPooja.png"
//         title="Ganesh Pooja"
//         buttonText="Book Now"
//       />
//       <CardContainer count={count - 1} />
//     </>
//   );
// };

const HomePage = () => {

  const [cards, setCards] = useState([]);

  // Fetch data when the component mounts
    useEffect(() => {
      HomePoojaTypeService.getAllHomePoojaTypes()
        .then(data => {
          setCards(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);


  return (
    <div>
      <Banner />
      <br />
      <h2>Your Complete Pooja Solution</h2>
      <p>"Whether you prefer online pooja or visiting us in person, we are your one-stop destination for all pooja needs. From pandits to ritual essentials, find everything you need for a perfect pooja, anytime, anywhere. Experience convenience and devotion, seamlessly blended!" 🙏✨</p>
      {/* Other homepage content */}
      <br/>
      <br/>
     
      {/* <div className="card-container"> */}

      <Container>
        <Row>
          {cards.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <HomeCard 
                image={card.image}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <HomeCard 
        image="/photos/ganeshPooja.png"
        title="Ganesh Pooja"
        text="A special pooja for Lord Ganesha."
        buttonText="Book Now"
      /> */}
  

{  /*******Card Container************************************/}
      {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}> */}
        {/* <CardContainer count={3} /> */}
      {/* </div> */}
      
      {/* <HomeCard 
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
      /> */}
      
        
      </div>



    // </div>
  );
};

export default HomePage;
