
import { useState, useEffect } from "react";

const App = () => {
  // TASK 1: DIGITAL TIMER
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((previousSeconds) => previousSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // TASK 2: AUTOMATIC WELCOME MESSAGE
  const [message, setMessage] = useState("Please Wait...");
  const [restartCount, setRestartCount] = useState(0);

  useEffect(() => {
    setMessage("Please Wait...");

    const welcomeId = setTimeout(() => {
      setMessage("Welcome to React!");
    }, 3000);

    return () => {
      clearTimeout(welcomeId);
    };
  }, [restartCount]);

  const handleRestart = () => {
    setMessage("Please Wait...");
    setRestartCount((previousCount) => previousCount + 1);
  };

  // TASK 3: USER FORM WITH LOCAL STORAGE
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [users, setUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;

    setUser((previousUser) => ({
      ...previousUser,
      [name]: value,
    }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      ...user,
      id: Date.now(),
    };

    setUsers((previousUsers) => [...previousUsers, newUser]);

    setUser({
      name: "",
      age: "",
      email: "",
    });
  };

  const handleDeleteUser = (id) => {
    setUsers((previousUsers) =>
      previousUsers.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="app">
      <style>{`
        body {
          margin: 0;
          background: #f1f5f9;
          font-family: Arial, sans-serif;
          color: #1e293b;
        }

        .app {
          max-width: 850px;
          margin: auto;
          padding: 25px;
        }

        .section {
          background: white;
          padding: 24px;
          margin-bottom: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 8px #00000012;
        }

        h1, h2 {
          color: #2563eb;
        }

        button {
          padding: 10px 16px;
          margin: 5px;
          border: none;
          border-radius: 6px;
          background: #2563eb;
          color: white;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.85;
        }

        .delete {
          background: #dc2626;
        }

        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin: 10px 0;
          padding: 12px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 18px;
        }

        th, td {
          border: 1px solid #cbd5e1;
          padding: 10px;
          text-align: left;
          overflow-wrap: anywhere;
        }

        th {
          background: #dbeafe;
        }

        .seconds {
          font-size: 42px;
          font-weight: bold;
        }
      `}</style>

      <h1>React Practice Tasks</h1>

      {/* TASK 1 */}
      <section className="section">
        <h2>Task 1: Digital Timer</h2>

        <p className="seconds">{seconds} seconds</p>

        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>

        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </section>

      {/* TASK 2 */}
      <section className="section">
        <h2>Task 2: Automatic Welcome Message</h2>

        <h3>{message}</h3>

        <button onClick={handleRestart}>
          Restart
        </button>
      </section>

      {/* TASK 3 */}
      <section className="section">
        <h2>Task 3: Save User Data to Local Storage</h2>

        <form onSubmit={handleUserSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleUserChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            min="1"
            value={user.age}
            onChange={handleUserChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleUserChange}
            required
          />

          <button type="submit">Save User</button>
        </form>

        <h3>Saved Users: {users.length}</h3>

        {users.length === 0 ? (
          <p>No users saved yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDeleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default App;
