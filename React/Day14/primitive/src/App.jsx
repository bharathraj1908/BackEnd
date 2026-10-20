const App = () => {

  // TASK 1 – Primitive Data Rendering
  const studentName = "Arun";
  const age = 22;
  const course = "React";
  const fees = 15000;

  // TASK 2 – Array Rendering Using map()
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  // TASK 3 – Object Rendering
  const student = {
    name: "Priya",
    age: 21,
    course: "MERN Stack",
    city: "Chennai"
  };

  // TASK 4 – Array of Objects Using map()
  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  return (
    <div>

      {/* TASK 1 */}
      <h1>Task 1 - Primitive Data Rendering</h1>

      <h2>{studentName}</h2>

      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Fees: {fees}</p>

      <hr />

      {/* TASK 2 */}
      <h1>Task 2 - Array Rendering Using Map</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <hr />

      {/* TASK 3 */}
      <h1>Task 3 - Object Rendering</h1>

      <h2>{student.name}</h2>

      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>

      <hr />

      {/* TASK 4 */}
      <h1>Task 4 - Array of Objects Using Map</h1>

      {students.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Course: {item.course}</p>
        </div>
      ))}

    </div>
  );
};

export default App;