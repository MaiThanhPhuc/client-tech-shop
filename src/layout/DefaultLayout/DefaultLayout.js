import {Outlet} from "react-router-dom/dist";
import Navbar from "../components/Navbar/Navbar";
import "./DefaultLayout.scss";

const DefaultLayout = ({children}) => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
