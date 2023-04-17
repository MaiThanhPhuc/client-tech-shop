import {Breadcrumbs, Icon} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

import "./Breadcrumb.scss";
function Breadcrumb() {
  const location = useLocation();
  return (
    <>
      <Breadcrumbs className="breadcrumb" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          <Icon>home</Icon>
          Trang chủ
        </Link>
        <Link underline="hover" color="text.primary" to={location.pathname}>
          {location.pathname}
        </Link>
      </Breadcrumbs>
    </>
  );
}

export default Breadcrumb;
