import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ListProduct from "../pages/ListProduct/ListProduct";
import SignUp from "../pages/SignUp/SignUp";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import Order from "../pages/Order/Order";
import CartPage from "../pages/Cart/CartPage";
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
    {path: "/detail/:id", component: <DetailProduct />},
    {path: "/order", component: <Order />},
    {path: "/cart", component: <CartPage />},
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {publicRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Route>
        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
