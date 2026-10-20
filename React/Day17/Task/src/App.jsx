import { useState } from "react";

const App = () => {

  // TASK 1 - ARRAY
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const handleAddReact = () => {
    setSkills((prev) => [...prev, "React"]);
  };

  const handleUpdateJavaScript = () => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };


  // TASK 2 - OBJECT
  const [student, setStudent] = useState({
    name: "Bharath",
    age: 22,
    course: "React"
  });

  const handleUpdateCourse = () => {
    setStudent((prev) => ({
      ...prev,
      course: "MERN"
    }));
  };

  const handleAddCity = () => {
    setStudent((prev) => ({
      ...prev,
      city: "Chennai"
    }));
  };


  // TASK 3 - TOGGLE
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };


  return (
    <div>

      {/* TASK 1 - ARRAY */}
      <h1>Task 1 - Array</h1>

      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={handleAddReact}>
        Add React
      </button>

      <button onClick={handleUpdateJavaScript}>
        Update JavaScript
      </button>

      <hr />


      {/* TASK 2 - OBJECT */}
      <h1>Task 2 - Object</h1>

      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>

      <button onClick={handleUpdateCourse}>
        Update Course
      </button>

      <button onClick={handleAddCity}>
        Add City
      </button>

      <hr />


      {/* TASK 3 - TOGGLE */}
      <h1>Task 3 - Toggle</h1>

      <button onClick={handleToggle}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show ? (
        <div>
          <h2>Student Details</h2>
          <p>Name: Bharath</p>
          <p>Age: 22</p>
          <p>Course: React</p>
        </div>
      ) : null}

    </div>
  );
};

export default App;