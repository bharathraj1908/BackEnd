import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      savedUser &&
      savedUser.email === loginEmail &&
      savedUser.password === loginPassword
    ) {
      localStorage.setItem("loggedInUser", loginEmail);

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={handleEmailChange}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={handlePasswordChange}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        New user? <Link to="/">Register</Link>
      </p>
    </div>
  );
};

export default Login;