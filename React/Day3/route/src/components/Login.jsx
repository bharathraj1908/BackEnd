const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">

      <div className="w-96 p-8 shadow-lg rounded-lg">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-blue-700 text-white p-3 rounded">
          Login
        </button>

      </div>

    </div>
  );
};

export default Login;