import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;

// import { Route, Navigate } from "react-router-dom";
// import PropTypes from "prop-types"; // Import PropTypes

// const PrivateRoute = ({ element, ...rest }) => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   return (
//     <>
//       <Route
//         {...rest}
//         element={isLoggedIn ? element : <Navigate to="/login" />}
//       />
//     </>
//   );
// };

// PrivateRoute.propTypes = {
//   element: PropTypes.element.isRequired,
// };

// export default PrivateRoute;
