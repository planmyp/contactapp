/*
Author: Ambuj
Created on: 06 Feb 2025
*/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



// const HomeCard =() => {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="/photos/poojaTypes.png" />
//       <Card.Body>
//         <Card.Title>Pooja Types</Card.Title>
//         <Card.Text>
//           We offer a variety of Pooja types.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// };

const HomeCard = ({ image, title, text, buttonText }) => {
  return (
    <Card style={{ width: '7em' }}>
        <Card.Text style={{ minHeight: '3em', // Ensures at least 2 lines of text space
            lineHeight: '1.5em', // Adjust line height for better spacing
            overflow: 'hidden',
            textAlign:'center'}}>{text}</Card.Text>
      <Card.Img variant="top" src={image} 
      style={{ 
        // height: '300px',
        // width: '300px', 
        height: '120px',
        width: '120px', 
        objectFit: 'cover'
      }} 
      />
        <Button style={{ backgroundColor: 'rgb(241, 196, 15)', color: 'white' }}>{buttonText}</Button>

    </Card>
  );
};

export default HomeCard;