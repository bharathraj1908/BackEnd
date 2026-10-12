
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState([]);
  const [displayName, setDisplayName] = useState([]);

  // Separate onChange function
  const handleChange = (e) => {

  const data = e.target.value
    setUserName(data);
  };

  const handleSubmit = () => {
    setDisplayName(userName);
  };

  return (
    <div>
      <h2>User Details</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>

      <h3>Hello, {displayName}</h3>

     

      
    </div>
  );
};

export default App;
