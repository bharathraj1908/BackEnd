import React, { useState } from "react";

const App = () => {
  // Task 1: Student Name List
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  const handleStudentChange = (event) => {
    setStudentName(event.target.value);
  };

  const addStudent = () => {
    if (studentName.trim() === "") return;

    setStudents([...students, studentName.trim()]);
    setStudentName("");
  };

  // Task 2: Course List
  const [courseName, setCourseName] = useState("");
  const [courses, setCourses] = useState([]);

  const handleCourseChange = (event) => {
    setCourseName(event.target.value);
  };

  const addCourse = () => {
    if (courseName.trim() === "") return;

    setCourses([...courses, courseName.trim()]);
    setCourseName("");
  };

  const deleteCourse = (index) => {
    setCourses(courses.filter((course, i) => i !== index));
  };

  // Task 3: Number List
  const [numberInput, setNumberInput] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleNumberChange = (event) => {
    setNumberInput(event.target.value);
  };

  const addNumber = () => {
    if (numberInput.trim() === "") return;

    const enteredNumber = Number(numberInput);

    if (!Number.isFinite(enteredNumber)) return;

    setNumbers([...numbers, enteredNumber]);
    setNumberInput("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Practice Tasks</h1>

      {/* Task 1: Student Name List */}
      <section>
        <h2>Task 1 - Student Name List</h2>

        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={handleStudentChange}
        />

        <button onClick={addStudent}>Add Student</button>

        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Task 2: Course List */}
      <section>
        <h2>Task 2 - Course Management</h2>

        <input
          type="text"
          placeholder="Enter course name"
          value={courseName}
          onChange={handleCourseChange}
        />

        <button onClick={addCourse}>Add Course</button>

        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course}{" "}
              <button onClick={() => deleteCourse(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Task 3: Number List */}
      <section>
        <h2>Task 3 - Number Storage</h2>

        <input
          type="number"
          placeholder="Enter a number"
          value={numberInput}
          onChange={handleNumberChange}
        />

        <button onClick={addNumber}>Add Number</button>

        <ul>
          {numbers.map((num, index) => (
            <li key={index}>
              {num} - {num % 2 === 0 ? "Even" : "Odd"}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;