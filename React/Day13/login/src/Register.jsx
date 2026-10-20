import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (existingUser && existingUser.email === userEmail) {
      alert("Email already registered");
      return;
    }

    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Registration successful");

    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={handleNameChange}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={userEmail}
          onChange={handleEmailChange}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={userPassword}
          onChange={handlePasswordChange}
          required
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;