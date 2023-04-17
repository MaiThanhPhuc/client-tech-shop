import {Outlet} from "react-router-dom/dist";
import Navbar from "../components/Navbar/Navbar";
import "./HomeLayout.scss";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import {useLocation} from "react-router-dom";

const HomeLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          {location.pathname !== "/" && <Breadcrumb />}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
