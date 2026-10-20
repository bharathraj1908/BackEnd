import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const loggedInEmail = localStorage.getItem("loggedInUser");

  const savedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    navigate("/login");
  };

  if (!loggedInEmail || !savedUser ||
      loggedInEmail !== savedUser.email) {
    return <NavigateToLogin />;
  }

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <h3>Hello, {savedUser.name}!</h3>

      <p>Email: {savedUser.email}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const NavigateToLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Dashboard;