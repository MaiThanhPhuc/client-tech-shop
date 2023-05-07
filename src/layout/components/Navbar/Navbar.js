// import { useState } from 'react'
import {Button, Dialog, Icon} from "@mui/material";
import "./Navbar.scss";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";
import CategoryBoard from "./CategoryBoard/CategoryBoard";
import {useState} from "react";
import {ButtonList} from "./CategoryBoard/CategoryContent";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Login from "../../../pages/Login/Login";
import SignUp from "../../../pages/SignUp/SignUp";

const CustomProper = styled(({className, ...props}) => (
  <Tooltip placement="bottom-start" {...props} classes={{popper: className}} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "1024px",
    fontSize: theme.typography.pxToRem(12),
  },
  [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
    marginTop: "0 !important",
  },
}));

const buttonList = ButtonList;

function Navbar() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const topButtonList = [
    {
      id: 1,
      text: "Giỏ hàng",
      href: "/cart",
      icon: "shopping_cart",
      action: () => console.log("Cart"),
    },
    {
      id: 2,
      text: "Đăng nhập",
      href: "",
      action: () => handleLogin(),
    },
    {
      id: 3,
      text: "Đăng kí",
      href: "",
      action: () => handleSignUp(),
    },
  ];

  const [showPopper, setShowPopper] = useState(0);

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <>
      <div className="wrapper-navbar">
        <div className="top-navbar">
          <div className="logo-container">BrandName</div>
          <SearchBar />
          <div>
            {topButtonList.map((x, index) => (
              <Button
                startIcon={
                  x.icon ? (
                    <Icon baseClassName="material-icons-outlined">
                      {x.icon}
                    </Icon>
                  ) : (
                    ""
                  )
                }
                className="top-button-item"
                key={index}
                href={x.href}
                onClick={x.action}
              >
                {x.text}
              </Button>
            ))}
          </div>
        </div>
        <div className="bottom-navbar">
          <CustomProper title={<CategoryBoard index={showPopper} />}>
            <div className="action-group">
              {buttonList.map((x, index) => (
                <Button
                  key={index}
                  startIcon={
                    x.icon ? (
                      <Icon baseClassName="material-icons-outlined">
                        {x.icon}
                      </Icon>
                    ) : (
                      ""
                    )
                  }
                  className="bottom-button-item"
                  href={x.href}
                  onMouseEnter={() => setShowPopper(index)}
                >
                  {x.text}
                </Button>
              ))}
            </div>
          </CustomProper>
        </div>
        <Dialog open={login} onClose={handleLogin}>
          <Login handleLogin={handleLogin} />
        </Dialog>
        <Dialog open={signUp} onClose={handleSignUp}>
          <SignUp handleSignUp={handleSignUp} />
        </Dialog>
      </div>
    </>
  );
}

export default Navbar;
