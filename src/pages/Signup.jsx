import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length < 3 ||
      !/\S+@\S+\.\S+/.test(email) ||
      password !== confirmPassword
    ) {
      alert("Validation failed!");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded p-2 mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border rounded p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       name.length < 3 ||
//       !/\S+@\S+\.\S+/.test(email) ||
//       password !== confirmPassword
//     ) {
//       alert("Validation failed!");
//       return;
//     }
//     localStorage.setItem("isLoggedIn", "true");
//     navigate("/home");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;
