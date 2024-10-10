import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload to redirect to login
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">
          Nasir Store
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link to="/home" className="text-white mx-2">
                Home
              </Link>
              <Link to="/cart" className="text-white mx-2">
                Cart
              </Link>
              <Link
                to="/logout"
                className="text-white mx-2"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-2">
                Login
              </Link>
              <Link to="/signup" className="text-white mx-2">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
