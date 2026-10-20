import { useState } from "react";

const App = () => {

  // TASK 1 - Name Change
  const [name, setName] = useState("Bharath");

  const handleNameChange = () => {
    setName("Raj");
  };


  // TASK 2 - Counter
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };


  // TASK 3 - Show / Hide
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };


  // TASK 4 - Input Name
  const [inputName, setInputName] = useState("");

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };


  // TASK 5 - Like Button
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };


  return (
    <div>

      {/* TASK 1 - Name Change */}
      <h1>Task 1 - Name Change</h1>

      <h2>{name}</h2>

      <button onClick={handleNameChange}>
        Change Name
      </button>

      <hr />


      {/* TASK 2 - Counter */}
      <h1>Task 2 - Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={handleIncrease}>
        Increase
      </button>

      <button onClick={handleDecrease}>
        Decrease
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

      <hr />


      {/* TASK 3 - Show / Hide */}
      <h1>Task 3 - Show / Hide</h1>

      <button onClick={handleToggle}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>Welcome to React</p>}

      <hr />


      {/* TASK 4 - Input Name */}
      <h1>Task 4 - Input Name</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={inputName}
        onChange={handleInputChange}
      />

      <p>Your Name: {inputName}</p>

      <hr />


      {/* TASK 5 - Like Button */}
      <h1>Task 5 - Like Button</h1>

      <h2>Likes: {likes}</h2>

      <button onClick={handleLike}>
        Like
      </button>

    </div>
  );
};

export default App;