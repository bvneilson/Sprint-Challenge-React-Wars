import React from 'react';
import Person from './Person.js';

const People = props => {
  if (!props.people) {
    return <h3>Loading...</h3>;
  }
  console.log(props.people)
  return (
    props.people.map((person, index) => {
      return <Person data={person} key={index} />;
    })
  )
}

export default People;
