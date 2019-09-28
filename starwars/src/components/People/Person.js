import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';
import '../StarWars.css';

const Person = props => {
  const person = props.data;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><h2>{person.name}</h2></CardTitle>
          <CardText><strong>Born:</strong> {person.birth_year}</CardText>
          <CardText><strong>Gender:</strong> {person.gender}</CardText>
          <CardText><strong>Height:</strong> {person.height}</CardText>
          <CardText><strong>Hair Color:</strong> {person.hair_color}</CardText>
          <CardText><strong>Eye Color:</strong> {person.eye_color}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Person;
