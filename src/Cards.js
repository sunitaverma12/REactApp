import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
  import su5 from "./su5.jpg";
  import "./Cards_style.css";
  
 

const Cards = (props) => {
  return (
    
        <Container >
      <Card  className="box" style={{width:"20%"}} >
        <CardImg   src={su5} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <button   style={{color:"red"}}>Button</button>
        </CardBody>
      </Card>
      </Container>
    
  );
};
<hr/>

export default Cards;