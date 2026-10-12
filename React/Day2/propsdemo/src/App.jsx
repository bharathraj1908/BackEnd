import React from "react";
import Student from "./Student";

const App = () => {
  return (
    <div>
      <h1>Student Details</h1>

      <Student name="Bharath" age={23} course="MCA" year="2002" />
      <Student name="Rahul" age={22} course="BCA" year="2005" />
      <Student name="Vijay" age={52} course="CM" year="1980" />
      
    </div>
  );
};

export default App;