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
    <Card style={{ width: '18rem' }}>
        <Card.Text style={{ minHeight: '3em', // Ensures at least 2 lines of text space
            lineHeight: '1.5em', // Adjust line height for better spacing
            overflow: 'hidden'}}>{text}</Card.Text>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;