import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ListProduct from "../pages/ListProduct/ListProduct";
import SignUp from "../pages/SignUp/SignUp";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
const MyRoutes = () => {
  const publicRoutes = [
    {path: "/", component: <Home />},
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/list/:slug",
      component: <ListProduct />,
    },
    {path: "/signUp", component: <SignUp />},
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {publicRoutes.map((item) => (
            <Route path={item.path} element={item.component} />
          ))}
        </Route>
        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
