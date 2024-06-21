import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const OnlyAdminPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("Current User:", currentUser);
  return currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to="/signIn" />;
};

export default OnlyAdminPrivateRoute;
