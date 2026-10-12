import React, { useState } from "react";

const App = () => {
  // Task 1: Toggle True / False
  const [isOn, setIsOn] = useState(false);

  const toggleStatus = () => {
    setIsOn(!isOn);
  };

  // Task 2: Like Button
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // Task 3: Update an Object
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai",
  });

  const changeName = () => {
    setUser({ ...user, name: "Arjun" });
  };

  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const changeCity = () => {
    setUser({ ...user, city: "Bangalore" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Task 1: Toggle True / False */}
      <section>
        <h2>Task 1: Toggle True / False</h2>

        <p>Status: {isOn ? "ON" : "OFF"}</p>

        <button onClick={toggleStatus}>
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>
      </section>

      <hr />

      {/* Task 2: Like Button */}
      <section>
        <h2>Task 2: Like Button</h2>

        <h3>My Post</h3>
        <p>Click the Like button!</p>

        <button onClick={toggleLike}>
          {isLiked ? "Liked " : "Like"}
        </button>

        {isLiked && <p>You liked this post!</p>}
      </section>

      <hr />

      {/* Task 3: Update an Object */}
      <section>
        <h2>Task 3: Update an Object</h2>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>

        <button onClick={changeName}>Change Name</button>{" "}

        <button onClick={increaseAge}>Increase Age</button>{" "}

        <button onClick={changeCity}>Change City</button>
      </section>
    </div>
  );
};

export default App;