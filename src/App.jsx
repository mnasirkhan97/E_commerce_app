import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/product/:id"
            element={<PrivateRoute element={<ProductDetails />} />}
          />
          <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <PrivateRoute path="/home" element={<Home />} />
//           <PrivateRoute path="/product/:id" element={<ProductDetails />} />
//           <PrivateRoute path="/cart" element={<Cart />} />
//           <Route path="/" element={<Navigate to="/login" />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
