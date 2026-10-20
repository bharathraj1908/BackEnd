
import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [city, setCity] = useState("");


    const getUsers = async () => {
      const response = await fetch("https://dummyjson.com/users?limit=30");
      const data = await response.json();
      setUsers(data.users);
    };
  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>User Details</h1>

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={handleSearch}
      />

      {users
        .filter((user) =>
          user.address.city.toLowerCase().includes(city.toLowerCase())
        )
        .map((user) => (
          <div key={user.id}>
            <h3>{user.firstName}</h3>
            <p>City: {user.address.city}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
