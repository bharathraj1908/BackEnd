import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold">
          GovConnect
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>

          <Link to="/services" className="hover:text-blue-200">
            Services
          </Link>

          <Link to="/complaints" className="hover:text-blue-200">
            Complaints
          </Link>

          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
        </div>

        <Link
          to="/login"
          className="bg-white text-blue-700 px-4 py-2 rounded-lg"
        >
          Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;