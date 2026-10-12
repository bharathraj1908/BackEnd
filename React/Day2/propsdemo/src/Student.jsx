import React from "react";

const Student = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
    </div>
  );
};

export default Student;