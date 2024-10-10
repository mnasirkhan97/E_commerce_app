import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]); // Add dependencies for useEffect

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <input
          className="border rounded p-2 mb-4 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          className="border rounded p-2 mb-4 w-full"
          type="password"
          placeholder="Password"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   if (isLoggedIn) {
//     navigate("/home");
//   }

//   return <div>{/* UI for Login */}</div>;
// };

// export default Login;
