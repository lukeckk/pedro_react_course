import React from 'react'
import propTypes from 'prop-types';

// Example of Prop type (refer to App6 for typescript)
export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
      {props.friends.map((friend) => (
        <h1>{friend}</h1>
      ))}
    </div>
  );
};

// using propTypes to set type of data for each object element
Person.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
  age: propTypes.number,
  isMarried: propTypes.bool,
  friends: propTypes.arrayOf(propTypes.string)

}